import React, { useEffect, useState } from "react"; 
import HomeCSS from './Home.module.css';
import TodoItem from "../../Item/TodoItem";
import CreateTodoArea from "./CreateTodoArea/CreateTodoArea";

const todos = [
    {
        id: '01',
        title: 'Go to the grocery store',
        isCompleted: false
    },
    {
        id: '02',
        title: 'Visit the gym',
        isCompleted: false
    },
    {
        id: '03',
        title: 'Watch Later content on YouTube',
        isCompleted: false
    }
]

const getLocalItems = () =>{
    let list = localStorage.getItem('todos') 
    if (list){
        return JSON.parse(localStorage.getItem('todos'));
    } else{
        return [];
    }  
}

function Home(){
    const [myTodos, setMytodos] = useState(() => {
        return localStorage.getItem('todos') === null ? todos : getLocalItems()
    });

    const changeTodo = (_id) =>{
        const copy = [...myTodos]
        const current = copy.find(t => t.id === _id)
        current.isCompleted = !current.isCompleted
        setMytodos(copy)
    }
    
    const removeTodo = (_id) =>{
        const newArr = [...myTodos].filter(t => t.id !== _id)
        setMytodos(newArr)
    }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(myTodos))
    },[myTodos]);

    return(
        <div className={HomeCSS.container}>
            <h1 className={HomeCSS.h1}>Avoca-toDO-list</h1>
            <div className={HomeCSS.image}>
                <img src={require('./avocado.png')} alt=""/>
            </div>
            {myTodos.map(todo => 
                <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo}
                removeTodo={removeTodo}/>
            )}
            <CreateTodoArea setMytodos={setMytodos}/>
        </div>
    )
}
export default Home;