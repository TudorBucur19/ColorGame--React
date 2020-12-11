import React from 'react';
import './square.styles.css';

const Square = ({color, checkColor, bg}) => {
    return(
    <div className="square" style={{backgroundColor: color, display: bg}} onClick={checkColor}>
       
    </div>
    )
}

export default Square;