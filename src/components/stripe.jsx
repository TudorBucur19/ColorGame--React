import React from 'react';
import './stripe.styles.css';

const Stripe = ({updateColors, message, playBtn, changeDifficulty}) => {
    return (
        <div className="stripe">
            <button className="reset" onClick={updateColors}>{playBtn}</button>
            <span className="message">{message}</span>
            <button className="easyBtn" onClick={() => changeDifficulty(3)}>Easy</button>
            <button className="hardBtn" onClick={() => changeDifficulty(6)}>Hard</button>
        </div>
    )
};

export default Stripe;