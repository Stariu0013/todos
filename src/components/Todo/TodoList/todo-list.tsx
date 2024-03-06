import React from 'react'
import { ITodo } from '../../../types/todo.ts'
import TodoItem from '../TodoItem/todo-item.tsx'

import styles from './TodoList.module.scss'

interface TodoListProps {
  todos: ITodo[]
  onTodoCompleteChange: (id: number) => void
  onTodoDelete: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = (
  { todos, onTodoCompleteChange, onTodoDelete },
) => {
  if (todos.length === 0) {
    return <h1>No todos</h1>
  }

  return (
    <div className={styles['todo-list']}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onTodoDelete={onTodoDelete}
          onTodoCompleteChange={onTodoCompleteChange} />
      })}
    </div>
  )
}

export default TodoList
