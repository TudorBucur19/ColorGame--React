import React, {useState, useEffect} from 'react';
import Stripe from './stripe';
import Square from './square';
import Header from './header';
import ScoreKeeper from './score';

const Home = () => {
  const [squares, setSquares] = useState([]);
  const [difficulty, setDifficulty] = useState(6);
  const [pickedColor, setPickedColor] = useState();
  const [message, setMessage] = useState("");
  const [headerBg, setHeaderBg] = useState("rgb(127, 252, 3)");
  const [playBtn, setPlayBtn] = useState("New colors");
  const [currentSc, setCurrentSc] = useState(0);
  const [scHistory, setScHistory] = useState([]);
  const [highSc, setHighSc] = useState(0);
  const [isPlaiyng, setIsPlaying] = useState(true);
    
  
  
  const randomColors = () => {
    const newColors = new Array(difficulty).fill();
    const colors = newColors.map((el, index) => randomColor());
    let random = Math.floor(Math.random() * difficulty);
    setSquares(colors);    
    setPickedColor(colors[random]);
    setMessage("");
    setPlayBtn("New colors")
    setHeaderBg("rgb(127, 252, 3)");
    setIsPlaying(true);
  };

  useEffect(()=>{
    const newColors = new Array(difficulty).fill();
    const colors = newColors.map((el, index) => randomColor());
    let random = Math.floor(Math.random() * difficulty);
    setPickedColor(colors[random]);
    setSquares(colors);
    
  }, [difficulty]);
  
  const checkColor = (i) => {
    if(isPlaiyng){
      let squaresCopy = [...squares]
   
      if(squares[i] === pickedColor){
        const correctColor = new Array(difficulty).fill(pickedColor);
        let scores = scHistory.push(currentSc)
        let min = Math.min(...scHistory);
        setSquares(correctColor);
        setMessage("Correct");
        setHeaderBg(pickedColor);
        setPlayBtn("Play again!");
        setCurrentSc(0);
        setHighSc(min);
        setIsPlaying(false);
      }else{
        let score = currentSc +1;
        squaresCopy[i] = "" ;
        setSquares(squaresCopy);
        setMessage("Keep Trying");
        setCurrentSc(score);
      }
    }
   
  }

    const changeDifficulty = (numSquares) => {
    setDifficulty(numSquares);
    setScHistory([]);
    setHighSc(0);
    setIsPlaying(true);
    
  }

    
  return (
      <div>
        <Header 
        pickedColor={pickedColor} 
        backgroundColor={headerBg}
        />
        <Stripe 
        updateColors={randomColors} 
        changeDifficulty={changeDifficulty}         
        message={message} 
        playBtn={playBtn}
        />
        
        <div className="container">
          {squares.map((sq, index) => 
            <Square 
            key={index} 
            color={sq} 
            checkColor={()=> checkColor(index)}
            />)}
        </div>
        <ScoreKeeper 
        currentSc={currentSc} 
        highScore={highSc}/>
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

