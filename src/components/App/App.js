//import React from "react";
import {useState} from "react"; 
import "./App.css";
import Item from "../Item";
import Input from "../Input";

// PLAN
// To get the text written on Input field
// and add this text into the li -> Item
// 
function App() {
  const [text, setText] = useState("");

  //This function needs to get the input and add to list
  function handleChange(){
setText(text+Input.value)
console.log(Input.value)
  }


  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input value={newText} onChange={function(){handleChange(newText)}}/>

      <Item/>

    </div>
  );
}

export default App;
