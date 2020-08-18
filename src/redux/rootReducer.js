import { combineReducers } from 'redux';
import toDoReducer from './todo/todo.reducer'

export default combineReducers({
    toDo: toDoReducer
})