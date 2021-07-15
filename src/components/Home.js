import React from 'react';
import '../styles/Home.css';

export const Home = () => {
    return(
        <div>
            <h1 style={{fontStyle:"italic"}} className="title">By Audiophiles,</h1>
            <h1 style={{fontStyle:"italic"}} className="title">For Audiophiles.</h1>
            <p style={{marginTop: "3rem"}}className="hometext">The best headphones in the world. Period.</p>
            <p className="hometext">We source all our products from the world's leading audio distributors. 
            No cheap sound cards. No corners cut. Just the best.
            </p>
            <h2 style={{marginTop: "10rem"}}className="title">Satisfaction Guaranteed.</h2>
            <p className="hometext">Try our products risk-free for 60 days. If you don't love it, get 100% of your money back. We mean it.</p>
        </div>
    );
}