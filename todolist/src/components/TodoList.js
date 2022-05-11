import React from "react";
import Todo from "./Todo";
// Import components


const TodoList = ({todos,setTodos}) =>{
    // console.log(todos); 
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo=>(
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key = {todo.id} text = {todo.text} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList