import React from 'react';
import './square.styles.css';

const Square = ({color, check}) => {
    return(
    <div className="square" style={{backgroundColor: color}} onClick={check}>
       
    </div>
    )
}

export default Square;