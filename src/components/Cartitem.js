import React, {useEffect, useState} from 'react';

export const Cartitem = (props) => {

    const [qty, setQty] = useState(props.quantity);

    useEffect(()=>{
        props.updateCart(props.itemdata.id, qty, "change");
    }, [qty])

    return (
        <div className = "cart-item-container">
            <div className = "cart-input-container">
                <span>Quantity:</span>
                <input type="number" value={qty} min="1" max="10" onChange={(e)=>{
                    setQty(parseInt(e.target.value));

                }}></input>
                <button className="cart-item-remove-button" onClick = {()=>props.updateCart(props.itemdata.id, 0, "change")}>Remove Item</button>
            </div>
            <p className="cart-item-name">{props.itemdata.name}</p>
            <p className="cart-item-price">Price: {props.itemdata.price*qty}</p>
            <img className="cart-item-image" src={props.itemdata.src}></img>
        </div>
    );

}