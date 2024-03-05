import { useAppDispatch, useAppSelector } from "../../store/store.ts"
import { useEffect, useState } from "react"
import { ITodo, TodoFilterOptionsEnum } from "../../types/todo.ts"
import {
  addNewTodoAction,
  fetchAllTodos,
  removeTodoAction, setTodosAction,
  toggleTodoAction,
} from "../../store/reducers/TodoReducer.ts"
import { generateNewId } from "../../utils/generateNewId.ts"

interface UseApp {
  error: string
  isLoading: boolean
  filterType: TodoFilterOptionsEnum
  completedTodosCount: number
  filteredTodos: ITodo[]
  setFilterType: (type: TodoFilterOptionsEnum) => void
  onTodoCompleteChange: (id: number) => void
  addNewTodo: (title: string) => void
  onTodoDelete: (id: number) => void
}

export const useApp = (): UseApp => {
  const dispatch = useAppDispatch()
  const { todos, error, isLoading } = useAppSelector(state => state.todos)

  const [filterType, setFilterType] = useState<TodoFilterOptionsEnum>(TodoFilterOptionsEnum.ALL)

  const onTodoCompleteChange = (id: number): void => {
    dispatch(toggleTodoAction(id))
  }

  const onTodoDelete = (id: number): void => {
    dispatch(removeTodoAction(id))
  }

  const addNewTodo = (todoTitle: string): void => {
    const newId = generateNewId(todos)
    const newTodo: ITodo = {
      id: newId,
      title: todoTitle,
      completed: false,
    }

    dispatch(addNewTodoAction(newTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || "[]") 

    if (todos.length) {
      dispatch(setTodosAction(todos))
      return
    }

    dispatch(fetchAllTodos())
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const completedTodosCount = todos.filter(todo => todo.completed).length

  const filteredTodos = todos?.filter(todo => {
    if (filterType === TodoFilterOptionsEnum.UNCOMPLETED) {
      return !todo.completed
    } else if (filterType === TodoFilterOptionsEnum.COMPLETED) {
      return todo.completed
    }

    return true
  })

  return {
    error,
    isLoading,
    filterType,
    completedTodosCount,
    filteredTodos,
    setFilterType,
    onTodoCompleteChange,
    addNewTodo,
    onTodoDelete,
  }
}