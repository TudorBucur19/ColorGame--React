import React, {useState, useEffect} from 'react';
import Stripe from './stripe';
import Square from './square';
import Header from './header'

const Home = () => {
  const [squares, setSquares] = useState([]);
  const [difficulty, setDifficulty] = useState(6);
  const [pickedColor, setPickedColor] = useState();
  const [message, setMessage] = useState("");
  const [headerBg, setHeaderBg] = useState("rgb(127, 252, 3)");
  const [playBtn, setPlayBtn] = useState("New colors");
  
  
  
  const randomColors = () => {
    const newColors = new Array(difficulty).fill();
    const colors = newColors.map((el, index) => randomColor());
    let random = Math.floor(Math.random() * difficulty);
    setSquares(colors);    
    setPickedColor(colors[random]);
    setMessage("");
    setPlayBtn("New colors")
    setHeaderBg("rgb(127, 252, 3)");
  };

  useEffect(()=>{
    const newColors = new Array(difficulty).fill();
    const colors = newColors.map((el, index) => randomColor());
    let random = Math.floor(Math.random() * difficulty);
    setPickedColor(colors[random]);
    setSquares(colors);
    
  }, [difficulty])
  
  const checkColor = (i) => {
   let squaresCopy = [...squares]
    if(squares[i] === pickedColor){
      const correctColor = new Array(difficulty).fill(pickedColor);
      setSquares(correctColor);
      setMessage("Correct");
      setHeaderBg(pickedColor);
      setPlayBtn("Play again!");
    }else{
      squaresCopy[i] = "" ;
      setSquares(squaresCopy);
      setMessage("Keep Trying");
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
        <Header pickedColor={pickedColor} backgroundColor={headerBg}/>
        <Stripe updateColors={randomColors} easy={easy} hard={hard} message={message} playBtn={playBtn}/>
        <div className="container">
          {squares.map((sq, index) => 
            <Square 
            key={index} 
            color={sq} 
            checkColor={()=> checkColor(index)}
            />)}
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

