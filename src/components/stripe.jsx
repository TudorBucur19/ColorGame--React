import React from 'react';
import './stripe.styles.css';

const Stripe = ({updateColors, changeDif}) => {
    return (
        <div className="stripe">
            <button className="reset" onClick={updateColors}>PLAY!</button>
            <span className="message">Message</span>
            <button className="easyBtn" onClick={changeDif}>Easy</button>
            <button className="hardBtn" onClick={changeDif}>Hard</button>
        </div>
    )
};

export default Stripe;