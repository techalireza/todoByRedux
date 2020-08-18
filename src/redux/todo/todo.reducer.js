import types from './todo.types'

const initialState = {
    toDoList: [
        {
            title: 'emroz',
            text: 'barname ha',
            id: 1,
            subItem: [
                {
                    id: 11,
                    work: 'bazi',
                    status: false
                },
                {
                    id: 12,
                    work: 'bazi',
                    status: true
                }
            ]
        },
    ]
}

const toDoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.TODO_ADD:
            return {
                ...state,
                toDoList: [...state.toDoList, payload]
            }
        case types.TODO_EDIT:
            return {
                ...state,
                toDoList: state.toDoList.map(item => item.id == payload.id ? payload : item)
            }
        case types.TODO_DELETE:
            return {
                ...state,
                toDoList: state.toDoList.filter(item => item.id != payload)
            }
        case types.TODO_DONE:
            return {
                ...state,
                toDoList: state.toDoList.map(item => item.id == payload.todoID ?
                    {
                        ...item, subItem: item.subItem.map(sub => sub.id == payload.subToDoID ? { ...sub, status: !sub.status } : sub)
                    } :
                    item)
            }
        default:
            return state
    }
}
export default toDoReducer
