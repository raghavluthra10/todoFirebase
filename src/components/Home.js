import { TextField, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import './Home.css';
import TodoItem from './TodoItem';
import firbase from 'firebase';

const Home = () => {

    const [ todos, setTodos ] = useState([]);
    const [ todoInput, setTodoInput ] = useState('');

    const updateTodoInput = (e) => {
        e.preventDefault();
        setTodoInput(e.target.value)
    }

    useEffect(() => {
        getTodos();
    }, [])

    // get all pre added todos
    const getTodos = (e) => {
        db.collection('todos').onSnapshot(function(querySnapshot) {
            setTodos(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    inprogress: doc.data().inprogress
                }))
            )
        })
    }


    // add todo to the data base with firebase
    const addTodo = (e) => {
        e.preventDefault();

        db.collection('todos').add({
            inprogress: true,
            timestamp: firbase.firestore.FieldValue.serverTimestamp(),
            todo: todoInput
        })

        setTodoInput('')
    }

    // left at 45 min 


    return (
        <div className='HomeContainer'>
            <div className='HomeFormDiv' >
                <form>
                    <TextField onChange={updateTodoInput} value={todoInput} className='HomeTodoInput' id='standard-basic' label="WRITE A TODO"  />
                    <Button type='submit' onClick={addTodo} className='HomeInputButton' color="primary" size='large' >  ADD  </Button>
                </form>
            </div>

            <div className='HomeTodoDisplay'> 
                  {todos.map((todo) => (
                      <TodoItem  todo={todo.todo} id={todo.id} inprogress={todo.inprogress} />
                  ))}
            </div>
            
        </div>
    )
}

export default Home
