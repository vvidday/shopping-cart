import React, {useState} from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';
import { data } from '../itemdata';
import cartimg from '../images/cart.svg';

export const Routes  = () => {
    const dt = data();

    const [itemdata, setItemdata] = useState(dt);

    const [cart, setCart] = useState(new Array(dt.length));

    const updateCart = (id, quantity, action) => {
        console.log(id, quantity, action);
        console.log("cart updated");
        if(action === "add"){
            const new_arr = cart.slice(0);
            if(new_arr[id]) new_arr[id] += quantity;
            else new_arr[id] = quantity;
            setCart(new_arr);
        }
        else if(action === "change"){
            const new_arr = cart.slice(0);
            new_arr[id] = quantity;
            setCart(new_arr);
        }
        else if(action === "clear"){
            setCart(new Array(dt.length));
        }
    }

    return (
        <HashRouter>
            <Nav />
            <div id="cart-div">
                <Link to="/cart" id="cart-container"><img id="cart-image" src={cartimg} alt="Shopping Cart"></img><span id="cart-text">{cart.reduce((a, b)=>a+b, 0)}</span></Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/shop">
                    <Shop data = {itemdata} updateCart = {updateCart}/>
                </Route>
                <Route path="/cart">
                    <Cart data = {cart} array ={dt} updateCart = {updateCart} />
                </Route>
            </Switch>
        </HashRouter>

    );

}