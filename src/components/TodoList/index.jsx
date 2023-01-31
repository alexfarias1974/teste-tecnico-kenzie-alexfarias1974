import * as React from 'react';
import List from '@mui/material/List';
import Form from "../Form";
import { useState } from "react";
import EachTodo from "../EachTodo";
import swal from "sweetalert";
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Box } from '../styles/todoList';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect (() => {
    if(localStorage.getItem("localTodos")) {
      const storedList = JSON.parse(localStorage.getItem("localTodos"));
      setTodos(storedList)
    }
  }, [])
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem("localTodos", JSON.stringify([...todos, todo]))
  };

  
  
  const deleteTodo = (id) => {
    let todoFiltered = todos.filter((todo) => todo.id !== id);
    setTodos(todoFiltered)
    localStorage.setItem("localTodos", JSON.stringify(todoFiltered))
  };
  
  const updateTodo = (id, updatedTodo) => {

    let todoIndex = todos.findIndex(todo => todo.id === id)
    if (updatedTodo && todoIndex !== -1) {
      const editTodo = todos
      editTodo[todoIndex].text = updatedTodo;
      setTodos(editTodo);
      localStorage.setItem("localTodos", JSON.stringify(editTodo))
    } else {
      swal("Alerta!!!", "O campo não pode estar vazio", "error")
    }
  };

  

  const completeTodo = (id) => {
    const checkedTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted};
      }
      return todo;
    });
    setTodos(checkedTodo)
    localStorage.setItem("localTodos", JSON.stringify(checkedTodo))
  }

  return (
    <Box>
      <Container maxWidth="sm">
        <h1>Lista de Afazeres</h1>
        <Form addTodo={addTodo} />
        <List id="todo-list" sx={{ 
          width: '100%', 
          maxWidth: 360,
          overflowY: "auto",
          height: 300, 
        }}>
          {todos.map((todo) => (
            <div key={todo.id}>
              <EachTodo 
              updateTodo={updateTodo} 
              todo={todo} 
              deleteTodo={deleteTodo} 
              completeTodo={completeTodo}/>
            </div>
          ))}
        </List>
      </Container>
    </Box>
  );
}
export default TodoList;
