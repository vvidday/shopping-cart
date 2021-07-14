import React from 'react';
import { Item } from './Item';

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
        <div className="shop-root">
            {displayItems()}
        </div>
    );

}