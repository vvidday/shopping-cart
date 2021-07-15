import React, {useEffect, useState} from 'react';

export const Cartitem = (props) => {

    const [qty, setQty] = useState(props.quantity);

    useEffect(()=>{
        props.updateCart(props.itemdata.id, qty, "change");
    }, [qty])

    return (
        <div className = "cart-item-container">
            <div className = "cart-input-container">
                <button onClick={()=>setQty(qty-1)}>-</button>
                <span>Quantity: {qty}</span>
                <button onClick={()=>{
                    if(qty === 10) alert("Sorry, the maximum you can purchase is 10!");
                    else setQty(qty+1)
                }}>+</button>
            </div>
            <p className="cart-item-name">{props.itemdata.name}</p>
            <p className="cart-item-price">Price: {props.itemdata.price*qty}</p>
            <img className="cart-item-image" src={props.itemdata.src}></img>
        </div>
    );

}