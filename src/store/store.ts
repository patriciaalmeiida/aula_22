import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import Todos from '../Components/Todos/todos'

const initialStateUsuarios = {
    name: 'Patricia',
    username: 'patricinha',
    email: 'paty_almeida@live.com'
}

function reducerUsuarios(state = initialStateUsuarios, action: any) {
    switch(action.type) {
        case 'GET_USUARIO':
            return {
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email
            } 
            default:
            return state
        }
     }   

    const initialStateTodo = {
        arrayTodos: []
    }

    function reducerTodo(state = initialStateTodo, action: any) {
        switch(action.type) {
            case 'GET_TODO':
                return {
                    arrayTodos: action.payload,
                }
                default:
                    return state
        }
    }

    const createRootReducer = () => combineReducers({
        usuario: reducerUsuarios,
        todos: reducerTodo

    })
     

    const store = createStore(createRootReducer(), composeWithDevTools())
      

    export {store}



   