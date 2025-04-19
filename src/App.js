import {
  useState,
  useRef,
  useEffect
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  useEffect(() => {
    console.log("Se actualizó result:", result);
  }, [result]);

  function addDigit(e){
    e.preventDefault();
    const value = inputRef.current.value;
    const hasDot = value.includes(".");
    if(hasDot && e.target.innerText===".") return;
    inputRef.current.value = inputRef.current.value + e.target.innerText;
  }

  function plus(e) { 
    e.preventDefault(); 
    const value = Number(inputRef.current.value); //capturar antes, debido a problemas de sincronia
    setResult(result => result + value ); 
    //inputRef.current.value = "";
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    const value = Number(inputRef.current.value); //capturar antes, debido a problemas de sincronia
    setResult(result => result - value ); 
    //inputRef.current.value = "";
  };
 
  function times(e) { 
    e.preventDefault(); 
    const value = Number(inputRef.current.value); //capturar antes, debido a problemas de sincronia
    setResult(result => result * value ); 
    //inputRef.current.value = "";
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    const value = Number(inputRef.current.value); //capturar antes, debido a problemas de sincronia
    setResult(result => result / value ); 
    //inputRef.current.value = "";
  };

  function deleteOne(e) { 
    e.preventDefault();
    const inputValue = inputRef.current.value.slice(0,-1);
    inputRef.current.value = inputValue;
  }; 
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form>
        
        <p ref={resultRef}> 
          {result} 
        </p>
        
        <input
          pattern="^-?\d*\.?\d*$" 
          ref={inputRef} 
          type="text" 
          placeholder="Type a number" 
        />
        
        <div className="buttons-area">
          <button onClick={addDigit}>1</button>
          <button onClick={addDigit}>2</button>
          <button onClick={addDigit}>3</button>
          <button onClick={addDigit}>4</button>
          <button onClick={addDigit}>5</button>
          <button onClick={addDigit}>6</button>
          <button onClick={addDigit}>7</button>
          <button onClick={addDigit}>8</button>
          <button onClick={addDigit}>9</button>
          <button onClick={addDigit}>.</button>
          <button onClick={addDigit}>0</button>

          <button onClick={plus} className="operation">+</button>
          <button onClick={minus} className="operation">-</button>
          <button onClick={times} className="operation">x</button>
          <button onClick={divide} className="operation">/</button>

          {/* <button onClick={deleteOne} className="control">⇐</button> */}
          <button onClick={resetInput} className="control">reset input</button>
          <button onClick={resetResult} className="control">reset result</button>
        </div>
 
      </form> 
    </div> 
  ); 
} 
 
export default App; 

