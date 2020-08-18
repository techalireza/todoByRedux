import types from './todo.types'


export const addToDo = (todo) => {
    return {
        type: types.TODO_ADD,
        payload: todo
    }
}
export const editToDo = (todo) => {
    return {
        type: types.TODO_EDIT,
        payload: todo
    }
}
export const deleteToDo = (todoID) => {
    return {
        type: types.TODO_DELETE,
        payload: todoID
    }
}
export const doneToDo = (todoID , subToDoID) => {
    return {
        type: types.TODO_DONE,
        payload: {todoID , subToDoID}
    }
}