import React, {useState} from 'react';
import Stripe from './stripe';
import Square from './square';
import Header from './header'

const Home = () => {
  const [squares, setSquares] = useState([]);
  const [difficulty, setDifficulty] = useState(6);
  const [pickedColor, setPickedColor] = useState();
  
  
  
  const randomColors = () => {
    const newColors = new Array(difficulty).fill();
    const colors = newColors.map((el, index) => randomColor());
    let random = Math.floor(Math.random() * difficulty);
    setSquares(colors);    
    setPickedColor(colors[random]);
  };

  console.log(squares);

  const checkColor = (i) => {
    if(squares[i] === pickedColor){
      console.log(pickedColor)
    }else{
     let backGr = "none";
     return backGr;
    }
  }

  const easy = () => {
    setDifficulty(3);
  }

  const hard = () => {
    setDifficulty(6);
  }

      
  return (
      <div>
        <Header pickedColor={pickedColor}/>
        <Stripe updateColors={randomColors} easy={easy} hard={hard}/>
        <div className="container">
          {squares.map((sq, index) => 
            <Square key={index} color={sq} checkColor={() => checkColor(index)} bg={()=>checkColor()} />)}
        </div>
      </div>
    );
  }
  
  export default Home;

  const randomColor = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b +")";
  }

