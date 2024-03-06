import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux'
import { todoReducer } from './reducers/todo-reducer.ts'
import { thunk, ThunkDispatch } from 'redux-thunk'

const reducers = combineReducers({
  'todos': todoReducer,
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export type RootState = ReturnType<typeof reducers>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunkDispatch = ThunkDispatch<RootState, never, AnyAction>

export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch
}
export const store: AppStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
)
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
