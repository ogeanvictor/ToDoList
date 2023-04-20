import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import { ToDoForm } from './ToDoForm'
import { Task } from './Task'


export const ToDoWrapper = () => {
    const [tasks, setTasks] = useState([]);

    const addTodo = (task) => {
        setTasks([
            ...tasks, 
            {id:uuidv4(), task: task, completed: false, isEditing: false}
        ]);
    };

    const toogleComplete = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
    };

    const deleteTodo = (id) => {
        setTasks(tasks.filter((task) =>task.id !== id ))
    };
    
  return (
    <div className='todo-wrapper'>
        <h1>Completar Tarefas!</h1>
        <ToDoForm addTodo={addTodo} />
        {tasks.map((task, index) => (
            <Task task={task} key={index} toogleComplete={toogleComplete} deleteTodo={deleteTodo}/>
        ))}
    </div>
  )
}
