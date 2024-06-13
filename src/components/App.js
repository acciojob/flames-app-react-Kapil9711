import React, { Component, useState } from "react";
import "../styles/App.css";

const messageArr = [
  "Siblings",
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
];

const removeMatchedChar = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    let ch1 = str1[i];
    let ch2 = str2[i];
    if (ch1 === undefined || ch2 === undefined) break;
    if (str1.includes(ch1) || str2.includes(ch2)) {
      str1 = str1.replace(ch1, "");
      str2 = str2.replace(ch1, "");
    }
  }
  return [str1, str2];
};

function App() {
  const input1Ref = React.useRef(null);
  const input2Ref = React.useRef(null);
  const [message, setMessage] = React.useState("");

  const handleCalculate = () => {
    let userName1 = input1Ref.current.value;
    let userName2 = input2Ref.current.value;
    if (userName1 === "" || userName2 === "")
      return setMessage("Please Enter valid input");
    let [str1, str2] = removeMatchedChar(userName1, userName2);
    const msgNumber = (str1.length + str2.length) % 6;
    setMessage(messageArr[msgNumber]); // getting msg based on number
  };

  const handleClear = () => {
    setMessage("");
    input1Ref.current.value = "";
    input2Ref.current.value = "";
  };

  return (
    <div id="main">
      <input name="name1" data-testid="input1" ref={input1Ref} type="text" />
      <input name="name2" data-testid="input2" ref={input2Ref} type="text" />
      <button data-testid="calculate_relationship" onClick={handleCalculate}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{message}</h3>
    </div>
  );
}

export default App;
