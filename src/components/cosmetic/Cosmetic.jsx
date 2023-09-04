import React from 'react';
import { cartToDB, removeFromDB } from '../../utilities/Fake_DB';
import './Cosmetic.css'

const Cosmetic = ({cosmetic}) => {
    const {name, price, id} = cosmetic;

    const cart_button = id =>{
      cartToDB(id)
    }

    const removeProducts = id =>{
       removeFromDB(id)
    }
     return (
        <div className='cosmetic'>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Id: {id}</p>
            <button onClick={() =>cart_button(id)}>Cart</button>
            <button onClick={() =>removeProducts(id)}>Remove Product</button>
        </div>
    );
};

export default Cosmetic;