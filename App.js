// App.js
import React from 'react';
import GuessNumber from './GuessNumber'; // Make sure the path is correct

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to the Number Guessing Game</h1>
      </header>
      <main>
        <GuessNumber />
      </main>
    </div>
  );
}

export default App;
