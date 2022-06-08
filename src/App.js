import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import Timer from "./timer";
import Key from "./Key";

function App() {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = str.split("");
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  // usestate hooks variables

  const [output,setOutput]=useState([])
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [best, setBest] = useState(1000);
  const [alpha, setAlpha] = useState(arr[Math.floor(Math.random() * 26 + 1)]);

  // addData is change the card value and match input and card value
   const addData = () => {
    if (alpha != "Success") {
      if (count == 20) {
          setCount(0)
          setAlpha("Success") 
      } else if (alpha == input.toUpperCase()) {
        setAlpha(arr[Math.floor(Math.random() * 25 + 1)]);
        setCount(count + 1);
        setOutput([...output,input.toUpperCase()])
        setInput("");

      }
    } else {
      setCount(0);
      setInput("");
      setAlpha(arr[Math.floor(Math.random() * 25 + 1)]);
      setTimeLeft(0);
      setOutput([])
    }
  };

 //handle keyboard function run when click enter button in keyboard 
  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === "Enter") {
        addData();
      }
    },
    [input]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="App">
      <div className="card">
      <h1>Type The Alphabet</h1>
      <p>Typing Game to see how fast you type.Timer</p>
      <p>start when you do :)</p>
      <h1 className="gamecard">{alpha}</h1>
      <br />
      <Timer
        alpha={alpha}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        setBest={setBest}
        best={best}
      />
      <h4>my best time :{`${best}s!`}</h4>
      <h2 className="textcolor">{output}</h2>
      <input
      className="input"
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="button" onClick={addData} type="submit">
        {alpha == "Success" ? "reset" : "Submit"}
      </button>
     
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyVal={key} setInput={setInput}  />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyVal={key}  setInput={setInput} />;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey setInput={setInput} onClick={addData} />
        {keys3.map((key) => {
          return <Key keyVal={key} setInput={setInput}  />;
        })}
        <Key keyVal={"DELETE"} bigKey setInput={setInput}/>
      </div>
      </div>
    </div>
  );
}

export default App;
