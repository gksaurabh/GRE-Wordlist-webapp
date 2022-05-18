import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)


  return (
    <div 
      //change classs name depending on state of flash card
      className={`card ${flip? 'flip': ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className='front'>{flashcard.word}</div>
      <div className='back'>{flashcard.definition}</div>
    </div>
  )
}
