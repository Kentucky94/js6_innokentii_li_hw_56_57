import React from 'react';
import './FormContainer.css';

const FormContainer = props => {
  return (
    <div className='FormContainer'>
      <form>
        <input className='form_input name' type="text" placeholder='Item Name' onChange={props.addName}/>
        <input className='form_input price' type="number" placeholder='Price' onChange={props.addPrice}/>
        KGS
        <button className='form_button' type='submit' onClick={props.add}>Add</button>
      </form>
    </div>
  );
};

export default FormContainer;