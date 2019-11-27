import React from 'react';
import './Cell.css';

const Cell = props => {
    return (
        <div className={props.class} onClick={props.open}>
            {props.content}
        </div>
    );
};

export default Cell;