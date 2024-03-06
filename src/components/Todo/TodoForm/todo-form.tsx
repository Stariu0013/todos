import React from 'react'

import styles from './TodoForm.module.scss'
import { TextField } from '@mui/material'
import { useTodoForm } from './use-todo-form.ts'
import CustomButton from '../../UI/Button/button.tsx'

interface TodoFormProps {
  addNewTodo: (todoTitle: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ addNewTodo }) => {
  const {
    todoTitle,
    charsLength,
    error,
    onTitleChange,
    onCharsLengthChange,
    onSubmit,
  } = useTodoForm(addNewTodo)

  return (
    <form onSubmit={onSubmit} className={styles['todo-form']}>
      <div className={styles['inputs-block']}>
        <TextField id="outlined-basic" placeholder="Test"
          value={todoTitle} label="Enter todo title"
          variant="outlined" onChange={onTitleChange} />
        <TextField
          type="number"
          error={Boolean(error)}
          id="outlined-error-helper-text"
          label="Enter title length"
          value={charsLength}
          onChange={onCharsLengthChange}
          helperText={error}
          className={styles['chars-block']}
        />
      </div>
      <CustomButton type="submit" sx={{ 'height': '56px' }}>
        Add new todo
      </CustomButton>
    </form>
  )
}

export default TodoForm
