import React from "react"; 

function Todo({ todo, dispatch }) {
    const toggledCompleted = () => {
        dispatch({
            type: "TOGGLED_COMPLETED",
            payload: todo.id
        });
    };
    console.log(todo);
    return (
        <div className="TodoCard" >
        <div onClick={toggledCompleted} 
        className={`todo${todo.completed ? "completed" : ""}`}
        style={{ textDecoration: todo.completed ? "line-through" : "todo.id"}} >
            <p> { todo.item }</p>
        </div>
        </div> 
    );
}

export default Todo; 