export interface ITodo {
  userId?: number
  id: number
  title: string
  completed: boolean
}

export enum TodoFilterOptionsEnum {
  ALL = 'all',
  COMPLETED = 'completed',
  UNCOMPLETED = 'uncompleted'
}
