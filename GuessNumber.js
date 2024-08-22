// GuessNumber.js
import React, { useState } from 'react';

function GuessNumber() {
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    setAttempts(attempts + 1);

    if (attempts >= 5) {
      setMessage(`You lose! The secret number was ${secretNumber}. Refresh to play again.`);
      return;
    }

    if (guess < secretNumber) {
      setMessage('Too low! Try again.');
    } else if (guess > secretNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`You guessed it! The number was ${secretNumber}.`);
    }
  };

  return (
    <div>
      <h2>Number Guessing Game</h2>
      <p>{message}</p>
      <input 
        type="number" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
        min="1" 
        max="100" 
      />
      <button onClick={handleGuess}>Guess</button>
      <p>Guess the number between 1 and 100</p>
    </div>
  );
}

export default GuessNumber;
