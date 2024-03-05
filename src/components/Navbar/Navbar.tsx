import styles from './Navbar.module.scss';
import TodoFilter from "../Todo/TodoFilter/TodoFilter.tsx";
import { TODO_FILTER_OPTIONS } from "../../types/todo.ts";

interface NavbarProps {
    completedTodosCount: number;
    filterType: TODO_FILTER_OPTIONS;
    setFilterType: (type: TODO_FILTER_OPTIONS) => void;
}

const Navbar: React.FC<NavbarProps> = ({completedTodosCount, setFilterType, filterType}) => {
    return (
        <header className={styles.Navbar}>
            <div className={styles.Title}>
                <h1>Todo list</h1>
                <p className={styles.Subtitle}>Completed todos - {completedTodosCount}</p>
            </div>
            <TodoFilter filterType={filterType} setFilterType={setFilterType} className={{margin: '20px 0 0'}}/>
        </header>
    );
};

export default Navbar;