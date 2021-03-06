import React from 'react';
import './header.styles.css';

const Header = ({pickedColor, backgroundColor}) => {
    
    return(
        <div style={{background: backgroundColor}}>
            <h1>The great
                <br/>
                <span><b>{pickedColor}</b></span>
                <br/>
                Color game
            </h1>
        </div>
    )
};

export default Header;