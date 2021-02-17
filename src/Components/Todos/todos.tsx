import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { isThisTypeNode } from 'typescript'

const Todos = () => { 

    const dispatch = useDispatch()

    const todos = useSelector((state: any) => state.todos.arrayTodos)

    const buscarPost = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((resposta: { data: any }) => dispatch({ type: 'GET_TODO', payload: resposta.data}))
    }


    return (
        <div>
            <ul>
                { todos && todos.map ((item: any) => (
                <li key={item.id}>{item.title} = {item.id}</li> ) ,
                )}
            
            </ul>
            <button onClick={buscarPost}>Buscar meus Todos</button>
        </div>
    )
    }

    export default Todos; 






