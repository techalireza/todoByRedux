import { createSelector } from 'reselect'

const toDoList = state => state.toDo.toDoList 

export const toDoID = createSelector(
    toDoList,
    (item) => item.length + 1
)