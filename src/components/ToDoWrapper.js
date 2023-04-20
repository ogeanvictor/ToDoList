import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import { ToDoForm } from './ToDoForm'
import { Task } from './Task'


export const ToDoWrapper = () => {
    const [showTask, setShowTask] = useState([]);

    const addTodo = (todo) => {
        setShowTask([
            ...showTask, 
            {id:uuidv4(), task: todo, completed: false, isEditing: false}
        ])
    }
    
  return (
    <div className='todo-wrapper'>
        <ToDoForm addTodo={addTodo} />
        {showTask.map((todo, index) => (
            <Task task={todo.task} key={index}/>
        ))}
    </div>
  )
}
