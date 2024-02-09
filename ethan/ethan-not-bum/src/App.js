import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
  <div>
    <h1>chatrrr spam the buttom</h1>
      <MyButton/>
  </div>
  );
}
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count+100000000000000000} times
    </button>
  );
}

export default App;
