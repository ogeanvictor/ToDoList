import React, {useState} from 'react'

export const EditToDoForm = ({ editTodo, todo }) => {
    const [task, setTask] = useState(todo.task)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(todo)
        editTodo(task, todo.id)
        setTask("")
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={task} placeholder='Atualizar tarefa' onChange={(e) => setTask(e.target.value)}/>
            <button type='submit' className='todo-btn'>Atualizar Tarefa</button>
        </form>
    )
}
