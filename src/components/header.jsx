import React from 'react';
import './header.styles.css';

const Header = ({pickedColor}) => {
    
    return(
        <div>
            <h1>The great
                <br/>
                <span>{pickedColor}</span>
                <br/>
                Color game
            </h1>
        </div>
    )
};

export default Header;