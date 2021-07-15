import React from 'react';
import { Cartitem } from './Cartitem';
import '../styles/Cart.css';

export const Cart = (props) => {

    const displayItems = () => {
        const arr = [];
        for(let i = 0; i < props.data.length; i++){
            if(props.data[i]){
                arr.push(
                    <Cartitem key={i} quantity={props.data[i]} itemdata={props.array[i]} updateCart={props.updateCart}/>
                );
            }
        }
        return arr;
    }

    const calcTotalPrice = () => {
        let total = 0;
        for(let i = 0; i < props.data.length; i++){
            if(props.data[i]){
                total += props.data[i]*props.array[i].price;
            }
        }
        return total;
    }

    return (
        <div className="cart-root">
            <h1 className="title">Your Cart</h1>
            <div className="cart-main-container">
                {displayItems()}
            </div>

            {props.data.reduce((a, b)=>a+b, 0) !== 0 ? <div>
                <p className="checkout-price">Total Price: ${calcTotalPrice()}</p> <button className="checkout-button" onClick={()=>props.updateCart(0, 0, "clear")}>Check Out</button> 
                </div>: <h2>Your cart is empty.</h2>}
            
        </div>
    );
}