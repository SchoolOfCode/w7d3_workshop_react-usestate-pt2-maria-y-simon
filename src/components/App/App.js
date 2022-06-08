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
  const [inputText, setInputText] = useState("");

  //This function needs to get the input and add to list
  function handleChange(event){
    const newInput = event.target.value
    setInputText(newInput);
    console.log(newInput);
  }

//   const getInputValue = (event)=>{
//     // show the user input value to console
//     const userValue = event.target.value;

//     console.log(userValue);
// };


  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input onChange={function(){handleChange()}}/>

      <Item text={inputText} />

    </div>
  );
}

export default App;
