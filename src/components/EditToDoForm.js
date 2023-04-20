import React, {useState} from 'react'

export const EditToDoForm = ({ editTask, todo }) => {
    const [task, setTask] = useState(todo.task);
    
    function handleSubmit(e) {
        e.preventDefault();
        editTask(task, todo.id);
        setTask(todo);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={task} placeholder='Atualizar tarefa' onChange={(e) => setTask(e.target.value)}/>
            <button type='submit' className='todo-btn'>Atualizar Tarefa</button>
        </form>
    )
}
