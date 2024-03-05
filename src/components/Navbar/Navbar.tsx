import styles from './Navbar.module.scss'
import TodoFilter from "../Todo/TodoFilter/TodoFilter.tsx"
import { TodoFilterOptionsEnum } from "../../types/todo.ts"

interface NavbarProps {
  completedTodosCount: number
  filterType: TodoFilterOptionsEnum
  setFilterType: (type: TodoFilterOptionsEnum) => void
}

const Navbar: React.FC<NavbarProps> = ({completedTodosCount, setFilterType, filterType}) => {
  return (
    <header className={styles.navbar}>
      <div>
        <h1>Todo list</h1>
        <p className={styles.subtitle}>Completed todos - {completedTodosCount}</p>
      </div>
      <TodoFilter filterType={filterType} setFilterType={setFilterType} className={{margin: '20px 0 0'}}/>
    </header>
  )
}

export default Navbar