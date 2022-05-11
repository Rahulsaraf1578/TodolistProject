import React, { useState } from "react";
import "./App.css"
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

    const [inputText,setInputText] = useState(" ");

  return (
    <div className="App">
        <header>
            <h1>Rahul's todo list {inputText}</h1>
        </header>

        {/* We are passing set input text to set the new text*/}
        <Form setInputText={setInputText}/>
        <TodoList/>
    </div>
  );
}

export default App;
