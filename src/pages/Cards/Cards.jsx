import cards from '../../cards.json';
import Card from '../../Components/Card/Card';
import { useState } from 'react';

export default function Cards(props) {
  const [count, setCount] = useState(0);

  function handlePrev(){
    if (count == 0){
      setCount(props.arr.length - 1);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }
  function handleNext(){
    if (count >= props.arr.length - 1){
      setCount(0);
      console.log(false);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  }
  
    
    return (
      <div>
      <button onClick={handleNext}>NEXT</button>
       
       <Card object={props.arr[count]}/>
       <button onClick={handlePrev}>PREV</button>
      </div>
    )
}
