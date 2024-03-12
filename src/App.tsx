import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [hasStarted , setHasStarted] = useState(false);
  const [numberQuizzPage , setNumberQuizzPage] = useState(0)
  const handleClickButtonStart = ()=>{
    setHasStarted(true);
    setNumberQuizzPage(1);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Quizz</h1>
        <div className = "button-align">
          {hasStarted === false && (
          <button onClick={handleClickButtonStart}>Start</button>
            )}
        </div>
        <div>
          {hasStarted === true &&  (
          <div className='align-item'>
          <QuestionCard id={numberQuizzPage}/>            
            <button className="button-align" >
              Suivant   
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
