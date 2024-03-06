import TodoList from '../Todo/TodoList/todo-list.tsx'
import Loader from '../UI/Loader/loader.tsx'

import styles from '../../main.module.scss'
import Navbar from '../Navbar/navbar.tsx'
import TodoForm from '../Todo/TodoForm/todo-form.tsx'
import { useApp } from './use-app.ts'

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
          <Navbar completedTodosCount={completedTodosCount}
            filterType={filterType}
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
