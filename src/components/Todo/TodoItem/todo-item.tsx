import { ITodo } from '../../../types/todo.ts'
import React from 'react'

import CustomButton from '../../UI/Button/button.tsx'
import styles from './TodoItem.module.scss'
import CloseIcon from '@mui/icons-material/Close'

interface TodoItemProps {
  todo: ITodo
  onTodoCompleteChange: (id: number) => void
  onTodoDelete: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = (
  { todo, onTodoCompleteChange, onTodoDelete },
) => {
  const { completed, title, id } = todo

  const titleClassname = completed ? [
    styles['todo-title'], styles['todo-title-completed'],
  ].join(' ') : styles['todo-title']

  return (
    <div className={styles['todo-item']}>
      <span onClick={
        () => onTodoCompleteChange(id)
      } className={titleClassname}>{title}</span>

      <CustomButton
        sx={{
          'borderRadius': '50%',
          'width': '25px',
          'height': '25px',
          'minWidth': 0,
          'color': 'black',
        }}
        onClick={() => onTodoDelete(id)}>
        <CloseIcon sx={{ 'width': '20px' }}/>
      </CustomButton>
    </div>
  )
}

export default TodoItem
