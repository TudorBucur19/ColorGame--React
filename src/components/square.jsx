import React from 'react';
import './square.styles.css';

const Square = ({color, checkColor}) => {
    return(
    <div className="square" style={{backgroundColor: color}} onClick={checkColor}>
       
    </div>
    )
}

export default Square;