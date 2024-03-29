import { ITodo } from '../../types/todo.ts'
import { RootState } from '../store.ts'
import axios, { AxiosError } from 'axios'
import { ThunkAction } from 'redux-thunk'

enum TodoActions {
  SET_TODOS = 'SET_TODOS',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  ADD_NEW_TODO = 'ADD_NEW_TODO',
}

interface FetchAllTodosAction {
  type: TodoActions.SET_TODOS
  payload: ITodo[]
}

interface SetIsLoading {
  type: TodoActions.SET_IS_LOADING
  payload: boolean
}

interface SetErrorAction {
  type: TodoActions.SET_ERROR
  payload: string
}

interface RemoveTodoAction {
  type: TodoActions.REMOVE_TODO
  payload: number
}

interface ToggleTodoAction {
  type: TodoActions.TOGGLE_TODO
  payload: number
}

interface AddNewTodoAction {
  type: TodoActions.ADD_NEW_TODO
  payload: ITodo
}

type TodoActionTypes =
    FetchAllTodosAction
    | SetIsLoading
    | SetErrorAction
    | RemoveTodoAction
    | ToggleTodoAction
    | AddNewTodoAction

interface IInitialState {
  todos: ITodo[]
  isLoading: boolean
  error: string
}

const initialState: IInitialState = {
  'error': '',
  'isLoading': false,
  'todos': [],
}

const setIsLoadingAction = (payload: boolean): SetIsLoading => {
  return {
    'type': TodoActions.SET_IS_LOADING,
    payload,
  }
}
const setErrorAction = (payload: string): SetErrorAction => {
  return {
    'type': TodoActions.SET_ERROR,
    payload,
  }
}

export const removeTodoAction = (payload: number): RemoveTodoAction => {
  return {
    'type': TodoActions.REMOVE_TODO,
    payload,
  }
}

export const toggleTodoAction = (payload: number): ToggleTodoAction => {
  return {
    'type': TodoActions.TOGGLE_TODO,
    payload,
  }
}

export const addNewTodoAction = (payload: ITodo): AddNewTodoAction => {
  return {
    'type': TodoActions.ADD_NEW_TODO,
    payload,
  }
}

export const setTodosAction = (payload: ITodo[]): FetchAllTodosAction => {
  return {
    'type': TodoActions.SET_TODOS,
    payload,
  }
}

export const fetchAllTodos = ()
// eslint-disable-next-line max-len,unicorn/consistent-function-scoping
: ThunkAction<Promise<void>, RootState, unknown, TodoActionTypes> => async (dispatch) => {
  dispatch(setIsLoadingAction(true))

  try {
    const res =
        await axios.get<ITodo[]>(
          'https://jsonplaceholder.typicode.com/todos?_limit=10',
        )
    dispatch(setTodosAction(res.data))
  } catch (error) {
    dispatch(setErrorAction((error as AxiosError).message))
  } finally {
    dispatch(setIsLoadingAction(false))
  }
}

// eslint-disable-next-line complexity
export const todoReducer = (state = initialState,
  action: TodoActionTypes): IInitialState => {
  switch (action.type) {
    case TodoActions.SET_TODOS: {
      return {
        ...state,
        'todos': action.payload,
      }
    }
    case TodoActions.SET_IS_LOADING: {
      return {
        ...state,
        'isLoading': action.payload,
      }
    }
    case TodoActions.SET_ERROR: {
      return {
        ...state,
        'error': action.payload,
      }
    }
    case TodoActions.REMOVE_TODO: {
      return {
        ...state,
        'todos': state.todos.filter((todo) => {
          return todo.id !== action.payload
        }),
      }
    }
    case TodoActions.ADD_NEW_TODO: {
      return {
        ...state,
        'todos': [...state.todos, action.payload],
      }
    }
    case TodoActions.TOGGLE_TODO: {
      return {
        ...state,
        'todos': state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
          }

          return todo
        }),
      }
    }
    default: {
      return state
    }
  }
}
