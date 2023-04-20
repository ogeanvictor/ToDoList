import React, {useState} from 'react'

export const ToDoForm = ({ addTodo }) => {
    const [task, setTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        addTodo(task)
        setTask("")
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={task} placeholder='Qual a tarefa de hoje?' onChange={(e) => setTask(e.target.value)}/>
            <button type='submit' className='todo-btn'>Adicionar Tarefa</button>
        </form>
    )
}
