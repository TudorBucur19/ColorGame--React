import React, {useState} from 'react';
import Stripe from './stripe';
import Square from './square';
import Header from './header'

const Home = () => {
  const [squares, setSquares] = useState([]);
  const [difficulty, setDifficulty] = useState(6);

  console.log(squares);


  const randomColors = () => {
    const newColors = new Array(difficulty).fill();
    const colors = newColors.map(el => randomColor());
    setSquares(colors);
  };

  const changeDifficulty = () => {
    difficulty === 3 ? setDifficulty(6) : setDifficulty(3);
    return difficulty;
  }

  const pickedColor = () => {
    let random = Math.floor(Math.random() * difficulty);
    return squares[random];
  };

  console.log(squares, pickedColor());

  const checkColor = () => {
    if (squares === pickedColor() ){
      let checkedColor = squares;
      console.log(checkedColor);
      return checkedColor;
    }
  }

  return (
      <div>
        <Header pickedColor={pickedColor()}/>
        <Stripe updateColors={randomColors} changeDif={changeDifficulty}/>
        <div className="container">
          {squares.map(sq => 
            <Square color={sq} check={checkColor()}/>)}
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

