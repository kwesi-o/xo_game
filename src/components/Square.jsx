import React from 'react';
import "../app.scss";

export default function Square({val, chooseSquare}) {
    return (
        <div className='square' onClick={chooseSquare}>
            {val}
        </div>
    );
}
