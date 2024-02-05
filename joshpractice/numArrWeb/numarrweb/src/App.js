import logo from './logo.svg';
import './App.css';


function App() {
  const array = [0,1,2];
  const addToArr = (e) => {
    if(isNaN(document.getElementById("input").value))
    {
      document.getElementById("btn").innerText = "invalid input";
      document.getElementById("btn").className ="App-Invalid";
      setTimeout(()=> 
        {document.getElementById("btn").innerText = "add to array";
        document.getElementById("input").value = "";
        document.getElementById("btn").className ="App-Valid";}, 1000);
    }
    else if(document.getElementById("input").value.length > 0)
    {
      array.push(parseInt(document.getElementById("input").value));
      console.log(array);
      document.getElementById("display").innerText = array;
      document.getElementById("input").value = "";
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <p><strong>this</strong> website adds <strong>numbers</strong> to an <strong>array</strong></p>
        <input type = "type number here" id = {"input"} ></input>
        <button className="App-Valid" id = "btn" onClick = {addToArr} > add to array </button>
        <p id = {"display"} >0,1,2</p>
      </header>
    </div>
  );
}

export default App;
