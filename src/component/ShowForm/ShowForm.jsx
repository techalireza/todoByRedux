import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../redux/todo/todo.action'
import { editToDo } from '../../redux/todo/todo.action'
import { TextField, Container, Button, Grid } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { toDoID } from '../../redux/todo/todo.slector'
import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'
// import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

function ShowForm({ addToDo, toDoID, editToDo }) {
    const history = useHistory();
    const { id } = useParams();
    const toDoObject = useSelector(state => state.toDo.toDoList.find(item => item.id == id))
    const [dayToDo, setDayToDo] = useState(toDoObject ? { title: toDoObject.title, text: toDoObject.text } : { title: '', text: '' })
    const [subDayToDo, setSubDayToDo] = useState(toDoObject ? toDoObject.subItem : [{ id: 1, work: "", status: false }])
    const handleAddRow = () => {
        setSubDayToDo([...subDayToDo, { id: subDayToDo.length + 1, work: "", status: false }])
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDayToDo({ ...dayToDo, [name]: value })
    }
    const handleChangeSub = (event, id) => {
        setSubDayToDo(subDayToDo.map(item => item.id == id ? { ...item, work: event.target.value } : item))
    }
    const handleSvaeToDo = (event) => {
        event.preventDefault();
        toDoObject ?
            editToDo({
                id: toDoObject.id,
                ...dayToDo,
                subItem: subDayToDo
            }) :
            addToDo({
                id: toDoID,
                ...dayToDo,
                subItem: subDayToDo
            })
        history.push('/')
    }
    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSvaeToDo}>
                {
                    <React.Fragment>
                        <TextField id="standard-basic" name="title" onChange={handleChange} value={dayToDo.title} label={"title"} />
                        <TextField id="standard-basic2" name="text" onChange={handleChange} value={dayToDo.text} label={"text"} />
                        {subDayToDo.map(item =>
                            <React.Fragment key={item.id}>
                                <Grid>
                                    <TextField id="standard-basic3" name="work" onChange={(event) => handleChangeSub(event, item.id)}
                                        value={item.work} label={"work"} />
                                </Grid>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                }
                <Button onClick={handleAddRow}>add row</Button>
                <Button type="submit">save todo</Button>
            </form>

        </Container>
    )
}


const mapStateToProps = createStructuredSelector({
    toDoID,
})
export default connect(mapStateToProps, { addToDo, editToDo })(ShowForm)
