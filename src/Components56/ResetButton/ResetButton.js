import React from 'react';
import './ResetButton.css';

const ResetButton = props => {
  return (
    <div className='Reset' onClick={props.reset}>
      Reset
    </div>
  );
};

export default ResetButton;