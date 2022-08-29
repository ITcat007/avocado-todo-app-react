import React, { useState } from "react"; 
import TodoItemCSS from "../../../Item/TodoItem.module.css";

function CreateTodoArea({setMytodos}){
    const [title, setTitle] = useState('');
    
    const addTodo = (title) => {
        setMytodos(prev =>[ 
        {
            id: new Date(),
            title,
            isCompleted: false
        },
        ...prev,
        ])
        setTitle('')
    }
    
    return(
       <div className={TodoItemCSS.item}>
            <input type="text" className={TodoItemCSS.input} onChange={e => setTitle(e.target.value)} 
            value={title}
            onKeyPress={e => e.key === 'Enter' && addTodo(title)}
            placeholder = 'Enter new todo...'      
            />
       </div>
    )
}
export default CreateTodoArea;