import React, { ChangeEvent, useState } from "react"

interface UseTodoForm {
  charsLength: string
  error: string
  todoTitle: string
  onSubmit: (event: React.FormEvent) => void
  onCharsLengthChange: (event: ChangeEvent<HTMLInputElement>) => void
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const useTodoForm = (addNewTodo: (title: string) => void): UseTodoForm => {
  const [todoTitle, setTodoTitle] = useState("")
  const [charsLength, setCharsLength] = useState("")
  const [error, setError] = useState("")

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    if (!todoTitle.trim()) return

    if (todoTitle.length <= +charsLength) {
      setError("")
      addNewTodo(todoTitle)
      setTodoTitle("")
    } else {
      if (Number(charsLength) < 0) {
        setError(`Should be positive numbers`)

        return
      }

      setError(`Todo title should be less or equal than ${charsLength} symbols`)
    }
  }

  const onCharsLengthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCharsLength(event.target.value)
  }

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodoTitle(event.target.value)
  }

  return {
    charsLength,
    error,
    todoTitle,
    onSubmit,
    onCharsLengthChange,
    onTitleChange,
  }
}