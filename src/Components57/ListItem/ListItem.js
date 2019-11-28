import React from 'react';
import './ListItem.css';

const ListItem = props => {
  return (
    <div className='ListItem'>
      <span>{props.name}</span>
      <div>
        <span>{props.price} KGS </span>
        <button onClick={props.delete}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;