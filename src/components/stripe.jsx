import React from 'react';
import './stripe.styles.css';

const Stripe = ({updateColors, easy, hard, message, playBtn}) => {
    return (
        <div className="stripe">
            <button className="reset" onClick={updateColors}>{playBtn}</button>
            <span className="message">{message}</span>
            <button className="easyBtn" onClick={easy}>Easy</button>
            <button className="hardBtn" onClick={hard}>Hard</button>
        </div>
    )
};

export default Stripe;