import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AnyAction, applyMiddleware, combineReducers, compose, createStore, Store } from "redux"
import { todoReducer } from "./reducers/TodoReducer.ts"
import { thunk, ThunkDispatch } from "redux-thunk"

const reducers = combineReducers({
  todos: todoReducer,
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose
export const store: AppStore = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunkDispatch = ThunkDispatch<RootState, never, AnyAction>

export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch
}