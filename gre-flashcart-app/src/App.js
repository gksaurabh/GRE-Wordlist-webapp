import React, {useState, useEffect, useRef} from "react";
import FlashcardList from "./FlashcardList";
import axios from 'axios';
import './app.css'


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  const difficultyLevelE1 = useRef();
  const amountE1 = useRef();
  const [difficultyLevel, setDifficultyLevel] = useState([]);

  useEffect(() => {
    axios.get('/wordlist')
    .then(res => { 
      setDifficultyLevel(res.data.difficulty);
      setFlashcards(res.data.map((wordItem, index)=>{
        return {
          id: `${index}-${Date.now}`,
          word: wordItem.word,
          definition: wordItem.definition
        }
      }))
    })
  },[])

  useEffect(() => {
    
  },[])

  function handleSubmit(e){
    e.preventDefault()
    axios.get('/rated-wordlist/generate', {
      params:{
        amount: amountE1.current.value,
        difficultyLevel: difficultyLevelE1.current.value
      }

    })
    .then(res => { 
      setFlashcards(res.data.map((wordItem, index)=>{
        return {
          id: `${index}-${Date.now}`,
          word: wordItem.word,
          definition: wordItem.definition
        }
      }))
      console.log(res.data);
    })
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="difficulty-level">Choose Difficulty of the Word</label>
          <select id="difficulty-level" ref={difficultyLevelE1}>
            <option value="1" key="1">1</option>
            <option value="2" key="2">2</option>
            <option value="3" key="3">3</option>
            <option value="4" key="4">4</option>
            <option value="5" key="5">5</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Number of Words</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountE1}/>
        </div>

        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>

      
      <div className="container"> 
        <FlashcardList flashcards = {flashcards}/>
      </div>
    </>
  );
}

const SAMPLE_FLASHCARDS = [
  {
      word: "introspection",
      definition: "examining one's own thoughts and feelings",
      difficulty: "1"
  },
  {
      word: "philanthropist",
      definition: "one who loves mankind",
      difficulty: "1"
  },
  {
      word: "antidote",
      definition: "medicine used against a poison or a disease",
      difficulty: "1"
  }];

export default App;