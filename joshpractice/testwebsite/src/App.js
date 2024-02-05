
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState("enter number here");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <strong>this</strong> website adds <strong>numbers</strong> to an <strong>array</strong>
        </p>
        
        <input className="App-TextField"> value = {val}</input>
        <button className="App-Button"> add to array </button>
      </header>
    </div>
  );
}

export default App;
