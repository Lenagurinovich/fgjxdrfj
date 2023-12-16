import cards from '../../cards.json';
import { useState } from 'react';

export default function Create(props) {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  function addCard(){
    props.setArr([...props.arr, {title, body}]);
    
  }
  
  return (
    <div>
      <h2>Create</h2>
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)}/>
        <button type="button"
        onClick={() => {addCard(body, title)
        setBody('');
        setTitle('');
        console.log(props.arr);
        }}
        >ADD POST</button>
      </form>
    </div>
  )
}
