import React from "react"

import styles from "./TodoForm.module.scss"
import CustomButton from "../../UI/Button/Button.tsx"
import { TextField } from "@mui/material"
import { useTodoForm } from "./useTodoForm.ts"

interface TodoFormProps {
  addNewTodo: (todoTitle: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ addNewTodo }) => {
  const { todoTitle, charsLength, error, onTitleChange, onCharsLengthChange, onSubmit } = useTodoForm(addNewTodo)

  return (
    <form onSubmit={onSubmit} className={styles['todo-form']}>
      <div className={styles['inputs-block']}>
        <TextField id="outlined-basic" placeholder="Test" value={todoTitle} label="Enter todo title"
          variant="outlined" onChange={onTitleChange} />
        <TextField
          type="number"
          error={!!error}
          id="outlined-error-helper-text"
          label="Enter title length"
          value={charsLength}
          onChange={onCharsLengthChange}
          helperText={error}
          className={styles['chars-block']}
        />
      </div>
      <CustomButton type="submit" sx={{ height: "56px" }}>Add new todo</CustomButton>
    </form>
  )
}

export default TodoForm