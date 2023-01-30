import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Paper } from "@mui/material";
import { useState } from "react";
import UpdateTodo from "../UpdateTodo";
import "./styles.css"

const EachTodo = ({ todo, deleteTodo, updateTodo, completeTodo }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <UpdateTodo
        updateTodo={updateTodo} 
        open={openDialog} 
        dialogHandler={dialogHandler} 
        todo={todo} 
        completeTodo={completeTodo}
      />
      <Paper 
        sx={{
          marginBottom: 1,
        }}
        style={{ padding: "0.5em 0em" }}>
        <ListItem sx={{
          height: 30,
        }}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteForeverOutlinedIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox 
                checked={todo.isCompleted} 
                edge="start" 
                tabIndex={-1} 
                disableRipple
                onChange={() => completeTodo(todo.id)}
                 
              />
            </ListItemIcon>
            <ListItemText 
              className={
                todo.isCompleted 
                ? 
                "completed" 
                : 
                ""} 
                primary={todo.text} 
                onClick={() => setOpenDialog(true)} 
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}

export default EachTodo;