import React from 'react';
import './score.styles.css';

const ScoreKeeper = ({currentSc, highScore}) => {
    return (
        <div className="scoreContainer">
            <div className="score">
                <h2>SCORE:</h2>
                <span><b>{currentSc}</b></span>
            </div>
            <div className="bestSc">            
                <h3>BEST SCORE:</h3>
                <span><b>{highScore}</b></span>
            </div>
        </div>
        
    )
};

export default ScoreKeeper;