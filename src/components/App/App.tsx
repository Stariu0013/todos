import TodoList from "../Todo/TodoList/TodoList.tsx"
import Loader from "../UI/Loader/Loader.tsx"

import styles from "../../main.module.scss"
import Navbar from "../Navbar/Navbar.tsx"
import TodoForm from "../Todo/TodoForm/TodoForm.tsx"
import { useApp } from "./useApp.ts"

function App(): JSX.Element {
  const {
    error,
    filterType,
    isLoading,
    filteredTodos,
    completedTodosCount,
    setFilterType,
    addNewTodo,
    onTodoCompleteChange,
    onTodoDelete,
  } = useApp()

  if (error) {
    return <h1 className={styles.error}>{error}</h1>
  }

  return (
    <div className={styles.app}>
      {
        isLoading ? <Loader /> : <>
          <Navbar completedTodosCount={completedTodosCount} filterType={filterType}
            setFilterType={setFilterType} />
          <TodoForm addNewTodo={addNewTodo} />
          <TodoList todos={filteredTodos} onTodoDelete={onTodoDelete}
            onTodoCompleteChange={onTodoCompleteChange} />
        </>
      }
    </div>
  )
}

export default App
