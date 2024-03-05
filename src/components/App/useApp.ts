import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import { useEffect, useState } from "react";
import { ITodo, TODO_FILTER_OPTIONS } from "../../types/todo.ts";
import {
    addNewTodoAction,
    fetchAllTodos,
    removeTodoAction, setTodosAction,
    toggleTodoAction,
} from "../../store/reducers/TodoReducer.ts";
import { generateNewId } from "../../utils/generateNewId.ts";

export const useApp = () => {
    const dispatch = useAppDispatch();
    const { todos, error, isLoading } = useAppSelector(state => state.todos);

    const [filterType, setFilterType] = useState<TODO_FILTER_OPTIONS>(TODO_FILTER_OPTIONS.ALL);

    const onTodoCompleteChange = (id: number) => {
        dispatch(toggleTodoAction(id));
    };

    const onTodoDelete = (id: number) => {
        dispatch(removeTodoAction(id));
    };

    const addNewTodo = (todoTitle: string) => {
        const newId = generateNewId(todos);
        const newTodo: ITodo = {
            id: newId,
            title: todoTitle,
            completed: false,
        };

        dispatch(addNewTodoAction(newTodo));
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || "[]") ;

        if (todos.length) {
            dispatch(setTodosAction(todos));
            return;
        }

        dispatch(fetchAllTodos());
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const completedTodosCount = todos.filter(todo => todo.completed).length;

    const filteredTodos = todos?.filter(todo => {
        if (filterType === TODO_FILTER_OPTIONS.UNCOMPLETED) {
            return !todo.completed;
        } else if (filterType === TODO_FILTER_OPTIONS.COMPLETED) {
            return todo.completed;
        }

        return true;
    });

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
    };
};