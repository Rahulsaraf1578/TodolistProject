import React from "react";
import "./App.css"
import "./components/TodoList"
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
        <header>
            <h1>Rahul's todo list</h1>
        </header>
        <Form/>
    </div>
  );
}

export default App;
