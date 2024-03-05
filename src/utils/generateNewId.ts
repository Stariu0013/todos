import { ITodo } from "../types/todo.ts"

export const generateNewId = (arr: ITodo[]): number => {
  return arr[arr.length - 1]?.id + 1 || 1
}