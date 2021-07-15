import React, {useState} from 'react';
import '../styles/Item.css';

export const Item = (props) =>{
    const [qty, setQty] = useState(1);

    const addToCart = (e) => {
        //const quantity = parseInt(e.target.previousSibling.value);
        // To do something after passing down function through props to update state of cart in Routes.js.
        if(qty < 1 || qty > 10) alert("Please enter a number between 1 and 10.");
        else props.updateCart(props.data.id, qty, "add");

        setQty(1);
    }

    return (
        <div className="item-container">
            <img className="item-image" src={props.data.src} alt="headphones"></img>
            <p className="item-name">{props.data.name}</p>
            <p className="item-price">${props.data.price}</p>
            <div className="item-input">
                <input type="number" value={qty} min="1" max="10" onChange={(e)=>{
                    if(e.target.value) setQty(parseInt(e.target.value));
                    else setQty("");
                }
                }></input>
                <button onClick = {addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}