import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { complete, remove } from '../features/todoSlice'


export default function TodoList() {

    const todolist = useSelector( state => state.todo )

    const dispatch = useDispatch()

    const removeIcon = <FontAwesomeIcon icon={faTrashCan}/>

    console.log(todolist)

    const showTodolist = todolist 
        ? todolist.map((todo, id) => (
            <li key={id}>
                <input 
                    type='checkbox'
                    onClick={() => dispatch(complete(todolist[id].id))}
                />
                <div>
                    {todo.content}
                </div>
                <button
                    onClick={() => dispatch(remove(todolist[id].id))}
                >
                    {removeIcon}
                </button>
            </li>
        ))
        : null

    return (
        <div className='todoList'>
            {showTodolist}
        </div>
    )
}
