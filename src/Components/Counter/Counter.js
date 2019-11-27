import React from 'react';
import './Counter.css';

const Counter = props => {
  return (
    <div className='Counter'>
      Tries: {props.count}
    </div>
  );
};

export default Counter;