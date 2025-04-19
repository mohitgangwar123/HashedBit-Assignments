import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ not safe for user input in real apps
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((item) => (
          <button
            key={item}
            onClick={() => (item === "=" ? calculate() : handleClick(item))}
          >
            {item}
          </button>
        ))}
        <button onClick={clearInput} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default App;
