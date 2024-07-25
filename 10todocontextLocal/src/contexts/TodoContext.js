import React, { createContext } from "react";
import { useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: " Todo msg",
            completed: false,                  //props h ye sb hmlog ()=>{} we wala functon b pass kr skte h isme functionality ni likhi jati h
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)    //use context me context pass krna zaroori h
}

export const TodoProvider = TodoContext.Provider   //smjhna h