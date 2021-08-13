import React, { useState, useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext'

function TodoForm()
{
    const [todo, setTodo] = useState('')
    const{addTodo } = useContext(TodosContext)


    const onSubmit = (e) =>
    {
        e.preventDefault()
        addTodo(todo)
        setTodo('')
}

    return (
        <form className="form my-6" onSubmit={onSubmit}>
            <div className="flex flex-col text-cm mb-2">
                <label className="font-bold mb-2 text-gray-800" htmlFor="todo">Todo</label>
                <input className="border border-gray-300 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" type="text" name="todo" id="todo" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder=" Nextjs application" />
            </div>
            <button type="submit" className="w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Submit</button>
        </form>
    )
}

export default TodoForm
