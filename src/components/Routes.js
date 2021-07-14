import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Nav } from './Nav';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';
import { data } from '../itemdata';

export const Routes  = () => {
    const dt = data();

    const [itemdata, setItemdata] = useState(dt);

    const [cart, setCart] = useState(new Array(dt.length));

    const updateCart = (id, quantity, action) => {
        console.log(id, quantity, action);
        if(action === "add"){
            const new_arr = cart.slice(0);
            if(new_arr[id]) new_arr[id] += quantity;
            else new_arr[id] = quantity;
            setCart(new_arr);
        }
        else{
            const new_arr = cart.slice(0);
            if(new_arr[id]) new_arr[id] = Math.min(0, new_arr[id] - quantity);
            setCart(new_arr);
        }
    }

    return (
        <BrowserRouter>
            <Nav />
            <button>Cart Items : {cart.reduce((a, b)=>a+b, 0)}</button>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/shop">
                    <Shop data = {itemdata} updateCart = {updateCart}/>
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>

    );

}