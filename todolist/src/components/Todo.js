import React from "react";

const Todo = ({todo,todos,setTodos, key,text}) => {
    // Events
    const deleteHandler= () => {
        setTodos(todos.filter((el)=>el.id!== todo.id))
    };

    const completeHandler = ( ) => {
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return {
                    // Keep all the properties of item same and only change this property
                    ...item,completed:!item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo