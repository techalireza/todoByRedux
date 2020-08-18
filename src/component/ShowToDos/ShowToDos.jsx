import React from 'react'
import { connect } from 'react-redux'
import { FormControl, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { deleteToDo, doneToDo } from '../../redux/todo/todo.action'


function ShowToDos({ todo, deleteToDo, doneToDo }) {
    return (
        <Container>
            {
                todo.map(item =>
                    <React.Fragment key={item.id}>
                        <Link to={`/update/${item.id}`}>
                            <Button>edit</Button>
                        </Link>
                        <Button onClick={() => deleteToDo(item.id)}>delete</Button>
                        <p>{item.title}</p>
                        <p>{item.text}</p>
                        <ul>
                            {
                                item.subItem.map(sub =>
                                    <React.Fragment key={sub.id}>
                                        {sub.status ? <del>{sub.work}</del> : <li>{sub.work}</li>}
                                        <span onClick={() => doneToDo(item.id, sub.id)}> done </span>
                                    </React.Fragment>
                                )
                            }
                        </ul>
                    </React.Fragment>
                )
            }
            <Link to='./add'>
                < Button variant="contained" color="primary">
                    Add ToDos
                </Button>
            </Link>
        </Container >
    )
}

const mapStateToProps = state => {
    return {
        todo: state.toDo.toDoList
    }
}

export default connect(mapStateToProps, { deleteToDo, doneToDo })(ShowToDos)