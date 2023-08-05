export type Task = {
    id: number,
    name: string,
    createdAt: Date,
    category: Category,
    content: string,
    //типізувати дату виразом регекс
    dates: RegExpMatchArray | never[],
    archived: boolean

}

export type Category = "Task" | "Random Thought" | "Idea"

export interface TaskState {
    tasks: Task[],

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

interface UnarchiveTaskAction {
    type: TaskActionTypes.UNARCHIVE_TASK
    payload: number
}

interface CreateTaskAction {
    type: TaskActionTypes.CREATE_TASK
    payload: Task
}

interface EditTaskAction {
    type: TaskActionTypes.EDIT_TASK
    payload: Task
}


export enum TaskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",

    DELETE_TASK = "DELETE_TASK",
    ARCHIVE_TASK = "ARCHIVATE_TASK",
    CREATE_TASK = "CREATE_TASK",
    EDIT_TASK = "EDIT_TASK",
    UNARCHIVE_TASK = "UNARCHIVE_TASK"
}

export type TaskAction =
    FetchTasksAction |
    DeleteTaskAction |
    ArchiveTaskAction |
    CreateTaskAction |
    EditTaskAction |
    UnarchiveTaskAction
