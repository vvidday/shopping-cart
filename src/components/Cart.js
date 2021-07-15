import React from 'react';
import { Cartitem } from './Cartitem';

export const Cart = (props) => {

    const displayItems = () => {
        const arr = [];
        for(let i = 0; i < props.data.length; i++){
            if(props.data[i]){
                arr.push(
                    <Cartitem quantity={props.data[i]} itemdata={props.array[i]} updateCart={props.updateCart}/>
                );
            }
        }
        return arr;
    }

    return (
        <div className="cart-root">
            <h1>Your Cart</h1>
            <div className="cart-main-container">
                {displayItems()}
            </div>
            
            <button className="checkout-button">Check Out</button>
        </div>
    );
}