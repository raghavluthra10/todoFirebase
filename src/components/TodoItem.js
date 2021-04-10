import React from 'react';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import { db } from '../firebase';


const TodoItem = (props) => {

  const toggleInProgress = (e) => {
    e.preventDefault();

    db.collection('todos').doc(props.id).update({
      inprogress: !props.inprogress
    })    
  }

  const deleteTodo = (e) => {
    e.preventDefault();

    db.collection('todos').doc(props.id).delete();
  }

  return (
  <div style={{ display: 'grid', gridTemplateColumns: ' auto auto auto'}}>
    <ListItem>
      <ListItemText primary={props.todo} secondary={ props.inprogress ? 'In Progress' : 'Completed' } />
    </ListItem>
    <Button onClick={toggleInProgress} > {props.inprogress ? 'In Progress' : 'Completed'} </Button>
    <Button onClick={deleteTodo} > Delete </Button>
  </div> 
  )
}

export default TodoItem
