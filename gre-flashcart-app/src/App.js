import React, {useState, useEffect} from "react";
import FlashcardList from "./FlashcardList";
import axios from 'axios';
import './app.css'


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios.get('/rated-wordlist')
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
  },[])
  return (
   <FlashcardList flashcards = {flashcards}/>
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
