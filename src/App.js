import React from 'react';
import './App.css';

import { Panel } from './components/Panel';

const looseEqual = x => y => {
  let counter = 0;
  counter = x == y ? counter + 1 : counter;
  if (counter === 4) {
    return true;
  }
  return false;
};


function getRandom(minimum = 1, maximum = 19) {
  let previousValue;
  return function random() {
    const number = Math.floor(
      (Math.random() * (maximum - minimum + 1)) + minimum
    );
    previousValue = number === previousValue && minimum !== maximum ? random() : number;
    return previousValue;
  };
};

function getRandomArray(length) {
  const arr = [];
  let value = null;
  const random = getRandom();
  while (length > 0) {
    value = random();
    if (!arr.includes(value.toString())) {
      arr.push(value.toString());
      --length;
    }
  }
  
  return arr;
  }

function App() {
  const [selectedList, setSelected] = React.useState([]);
  const [selectedList2, setSelected2] = React.useState([]);
  const [isWon, setWon] = React.useState(false);
  const [isFailed, setFailed] = React.useState(false);

  const generateSelectedLists = React.useCallback(() => {
    setSelected(getRandomArray(8));
    setSelected2(getRandomArray(1));
  }, []);

  const handleClear = React.useCallback(() => {
    setSelected([]);
    setSelected2([]);
    setWon(false);
    setFailed(false);
  }, []);

  const showResult = React.useCallback(() => {
    const res1 = getRandomArray(8);
    const res2 = res1.concat(getRandomArray(1));

    const isWon = looseEqual(res2.sort())(selectedList.concat(selectedList2).sort());
    if (isWon) {
    setWon(true);
    setFailed(false);
    } else {
      setWon(false);
      setFailed(true);
    }
  }, [selectedList, selectedList2]);

  const handleSelected = React.useCallback(index => () => setSelected(list => list.concat(String(index + 1))), []);
  const handleSelected2 = React.useCallback(index => () => setSelected2(list2 => list2.concat(String(index + 1))), []);
  return (
    <div className="App">
      <Panel
        onSelect={handleSelected}
        onSelect2={handleSelected2}
        list={selectedList}
        list2={selectedList2}
        onSubmit={showResult}
        generateSelectedLists={generateSelectedLists}
        onClear={handleClear}
      />
      <Panel
        withDefault
        isWon={isWon}
        isFailed={isFailed}
        list={selectedList}
      />
    </div>
  );
}

export default App;
