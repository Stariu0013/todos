export interface ITodo {
    userId?: number,
    id: number,
    title: string,
    completed: boolean
}

export enum TODO_FILTER_OPTIONS {
    ALL = "all",
    COMPLETED = "completed",
    UNCOMPLETED = "uncompleted"
}