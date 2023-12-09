import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../features/todoSlice';

export default function InputTodo() {

    const dispatch = useDispatch()

    const [buttonState, setButtonState] = useState(false);

    const [todolist, setTodolist] = useState({
        id: 0,
        content: "",
    })

    const handleInput = () => {
        setButtonState(!buttonState)
    }

    const handleButton = () => {
        setButtonState(!buttonState)
    }

    const handleContent = (e) => {
        setTodolist({
            content: e.target.value
        })
    }

    const onReset = () => {
        setTodolist({
            content: ""
        })
        setButtonState(!buttonState)
    }
    
    return (
        <div className='inputTodo'>
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
                {
                    buttonState
                    ? <div>
                        <input type='text' value={todolist.content} onChange={handleContent} autoFocus/>
                        <input type='submit' value="추가"/>
                    </div>
                    : null
                }
                <div>
                    {
                        buttonState
                        ? <button
                            type='button'
                            onClick={handleButton}
                        >
                            x
                        </button>
                        : <button
                            type='button'
                            onClick={handleInput}
                        >
                            +
                        </button>
                    }
                </div>
            </form>
        </div>
    )
}
