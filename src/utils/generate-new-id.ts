import { ITodo } from '../types/todo.ts'

export const generateNewId = (arr: ITodo[]): number => {
  return arr.at(-1)?.id + 1 || 1
}
