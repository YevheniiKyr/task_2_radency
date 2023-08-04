export type Task = {
    id: number,
    name: string,
    createdAt: Date,
    category: Category,
    content: string,
    //типізувати дату виразом регекс
    dates: [string],
    archived: boolean

}

export type Category = "Task" | "Random Thought" | "Idea"

export interface TaskState {
    tasks: Task[],
    loading: boolean,
    error: null | string
}

interface FetchTasksAction {
    type: TaskActionTypes.FETCH_TASKS

}

interface DeleteTaskAction {
    type: TaskActionTypes.DELETE_TASK
    payload: number

}

interface ArchiveTaskAction {
    type: TaskActionTypes.ARCHIVE_TASK
    payload: number
}


interface FetchTasksSuccessAction {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS
    payload: Task[]
}

interface FetchTasksErrorAction {
    type: TaskActionTypes.FETCH_TASKS_ERROR
    payload: string
}

export enum TaskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
    DELETE_TASK = "DELETE_TASK",
    ARCHIVE_TASK = "ARCHIVATE_TASK"
}

export type TaskAction =
    FetchTasksAction |
    FetchTasksErrorAction |
    FetchTasksSuccessAction |
    DeleteTaskAction |
    ArchiveTaskAction
