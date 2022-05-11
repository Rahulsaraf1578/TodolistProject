import React, {useState} from "react";

// Accessing props like setinputText
const Form = ({todos,setTodos,inputText,setInputText}) => {

     const inputTextHandler = (e)=>{
        //  
        //  console.log(e);

        // It will give target like where it is targeting in html
        // console.log(e.target);

        // It will give value of that target
        console.log(e.target.value);
        setInputText(e.target.value);
       }

       const submitTodoHandler=(e)=>{
            // The button we made after clicking we refreshing and we don't want that 
            // So we use below code which prevent default behaviour. 
           e.preventDefault();
            
           setTodos([
            //    Here we are giving id because react does not know how to re-render list after deleting a certain item
            // That's why it need a id so that it can delete it.
               ...todos, {text:inputText,completed:false,id:Math.random()*1000}
           ]);
        //    It will reset the setInputText in console but it will not reset in ui
           setInputText("");
       };

    return(
        <form>
            <input 
            // Value here will help refresh when we use setInputText and set it to empty quotes afer passing in todo (line 27)
            // it will give the same value to input and replace our written quote with empty quotes
                value={inputText}
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" />
            <button onClick={submitTodoHandler } className="todo-button" type="submit">
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