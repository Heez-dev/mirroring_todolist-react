import { createSlice } from '@reduxjs/toolkit';

let todoId = 0;

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        add : (state, action) => {
            todoId++;
            state.push({
                id: todoId,
                content: action.payload,
                complete: false,
            })
        },
        remove: (state, action) => {
            return state.filter((e) => e.id !== action.payload)
        },
        complete: (state, action) => {
            return state.map((e) => e.id === action.payload ? {...e, complete: !e.complete} : e)
        },
    }
})

export const {add, remove, complete} = todoSlice.actions

export default todoSlice.reducer