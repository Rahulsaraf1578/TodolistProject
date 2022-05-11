import React, { useState } from "react";
import "./App.css"
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

    const [inputText,setInputText] = useState(" ");
    const [todos,setTodos]=useState([]);

  return (
    <div className="App">
        <header>
            <h1>Rahul's todo list</h1>
        </header>

        {/* We are passing set input text to set the new text*/}
        <Form todos={todos} setTodos={ setTodos} inputText={inputText} setInputText={setInputText}/>
        <TodoList />
    </div>
  );
}

export default App;
