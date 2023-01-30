import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import swal from "sweetalert";

const Form = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const todoCreated = (inputText) => {
    const todoObject = {text: inputText, id: uuidv4(), isCompleted: false};
      if(inputText === "") {
        swal("Alerta!!!", "O campo tarefa é obrigatório!", "error")
      } else {
        addTodo(todoObject);
      }
    setInputText("")
  }
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          sx={{
            marginLeft: 2, 
            marginBottom: 2}} 
          id="input-with-sx" 
          label="Tarefa" 
          variant="standard"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <Button sx={{ marginLeft: 2, background: 'lightblue' }} variant="outlined" onClick={() => todoCreated(inputText)}>
          Adicionar
        </Button>
      </Box>
    </div>
  );
}

export default Form;
