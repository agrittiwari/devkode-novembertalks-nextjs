import React from 'react'

const Todo = ({todo}) =>
{
 return(
     <li className="bg-white items-center flex shadow-lg rounded-lg py-2 px-4 my2">
         <input type="checkbox" name="completed" id="completed" checked={todo.fields.completed}  className="mr-2 form-checkbox h-5 w-5"/>
         <p className={` flex-1  text-gray-800 ${ todo.fields.completed ? `line-through` : '' }`}>{todo.fields.description}</p>
        <button className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">Delete</button>
</li>
 )   
}

export default Todo;