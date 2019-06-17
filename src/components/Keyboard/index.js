import React from 'react';
import './keyboard.css';

export function Keyboard({ number, limit, list, onSelect }) {
    return (
        <ul className="list">
          {
            new Array(number).fill().map((_, index) => {
                const cs = list.includes(String(index + 1)) ? "list-item selected" : "list-item";
                  return (
                      <li className={cs} onClick={list.length < limit ? onSelect(index) : () => {}}>{index + 1}</li>
                  )
              })
          }
        </ul>
    )
}