import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../features/todoSlice';

export default function InputTodo() {

    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState({
        id: 0,
        content: "",
    })

    const handleContent = (e) => {
        setTodolist({
            content: e.target.value
        })
    }

    const onReset = () => {
        setTodolist({
            content: ""
        })
    }
    
    return (
        <div>
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault()
                        if(todolist.content !== "") {
                            dispatch(add(todolist.content))
                        } else (alert("할 일을 입력해주세요!"))
                        onReset()
                    }
                }
            >
                <input type='text' value={todolist.content} onChange={handleContent}/>
                <input type='submit' value="+"/>
            </form>
        </div>
    )
}
