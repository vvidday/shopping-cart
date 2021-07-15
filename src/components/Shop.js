import React from 'react';
import { Item } from './Item';
import '../styles/Shop.css';

export const Shop = (props) => {
    const displayItems = () => {
        const tmp = [];
        for(let i of props.data){
            tmp.push(
                <Item data={i} updateCart = {props.updateCart}/>
            )
        }
        return tmp;
    }

    return (
        <div>
            <h1 className="title">Shop</h1>
            <div className="shop-root">
                {displayItems()}
            </div>
        </div>
        
    );

}