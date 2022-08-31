import React from "react"; 
import Check from "./Check.js";
import TodoItemCSS from './TodoItem.module.css'
import {IoTrash} from "react-icons/io5"


function TodoItem({todo, changeTodo,removeTodo}){
    return(
        <div className={TodoItemCSS.item}>
            <button className={TodoItemCSS.todo} onClick={() =>changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
                <span className={todo.isCompleted? TodoItemCSS.line_through:TodoItemCSS.text}>
                    {todo.title}
                </span>
            </button>
            <button onClick={()=>removeTodo(todo.id)} 
            className={TodoItemCSS.trash} >
                <IoTrash color={'#d988dd'}/>
            </button>          
        </div>
    )
}
export default TodoItem;