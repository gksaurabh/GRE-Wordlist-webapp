import React, {useState} from "react";
import FlashcardList from "./FlashcardList";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
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
