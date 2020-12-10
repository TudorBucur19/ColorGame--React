import React from 'react';
import './stripe.styles.css';

const Stripe = ({updateColors, easy, hard}) => {
    return (
        <div className="stripe">
            <button className="reset" onClick={updateColors}>PLAY!</button>
            <span className="message">Message</span>
            <button className="easyBtn" onClick={easy}>Easy</button>
            <button className="hardBtn" onClick={hard}>Hard</button>
        </div>
    )
};

export default Stripe;