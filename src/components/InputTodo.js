import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../features/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function InputTodo() {

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const [buttonState, setButtonState] = useState(false);

    const [todolist, setTodolist] = useState({
        id: 0,
        content: "",
    })

    const plusIcon = <FontAwesomeIcon icon={faPlus} style={{fontSize: "20px", color: "white"}}/>

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

    useEffect(() => {
        if (buttonState) {
            // Apply autoFocus after the transition (300ms delay in this case)
            setTimeout(() => {
                inputRef.current.focus();
            }, 300);
        }
    }, [buttonState]);
    
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
                <div className={`inputContent ${buttonState? '' : 'down'}`}>
                    <input 
                        ref={inputRef}
                        type='text' 
                        value={todolist.content} 
                        onChange={handleContent} 
                        autoFocus
                    />
                    <button type='submit'>
                        <p>추가</p>
                    </button>
                </div>
                
                <div>
                    <button
                        type='button'
                        className={`showInputBtn ${buttonState ? 'rotate' : ''}`}
                        onClick={
                            buttonState? handleButton : handleInput
                        }
                    >
                        {plusIcon}
                    </button>
                </div>
            </form>
        </div>
    )
}
