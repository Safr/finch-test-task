import React from 'react';
import './panel.css';
import { Keyboard } from '../Keyboard';
import { Button } from '../Button';

export function Panel({ withDefault, list, list2, onSelect, onSelect2, onSubmit, isWon, isFailed, generateSelectedLists, onClear }) {
    return (
        <div className="wrapper">
         <header className="header">
             Билет 1
            {!withDefault && <span onClick={generateSelectedLists} />}
         </header>
         {!withDefault && (
             <>
             <p>Поле 1. Отметьте 8 чисел</p>
           <Keyboard number={19} limit={8} list={list} onSelect={onSelect} />
           <p>Поле 2. Отметьте 1 число</p>
           <Keyboard number={2} limit={1} list={list2} onSelect={onSelect2}/>
           <Button onClick={onSubmit} title="Показать результат" disabled={list && list.length === 0} />
           <Button onClick={onClear} title="Очистить" />
         </>
         )}
         {isWon && !isFailed && <p>Ого, вы выиграли! Поздравляем!</p>}
         {isFailed && !isWon && <p>Упс, вы проиграли!</p>}
        </div>
    )
}