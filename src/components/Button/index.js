import React from 'react';
import './button.css';

export function Button({ onClick, title, disabled }) {
    return (
        <button type="button" onClick={onClick} className="button" disabled={disabled}>{title}</button>
    )
}