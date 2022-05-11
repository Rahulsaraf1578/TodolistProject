import React, {useState} from "react";

// Accessing props like setinputText
const Form = ({setInputText}) => {

     const inputTextHandler = (e)=>{
        //  
        //  console.log(e);

        // It will give target like where it is targeting in html
        // console.log(e.target);

        // It will give value of that target
        console.log(e.target.value);
        setInputText(e.target.value);
       }

    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form