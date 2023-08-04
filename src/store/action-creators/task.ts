import {Dispatch} from "redux";
import {TaskAction, TaskActionTypes, Category, Task} from "../../types/task";


let notes: Task[] = [
    {name: "djdjdjd", id: 1, createdAt: new Date(), content: "dweddede", category: "Task",  dates: ["2/3/2000"], archived: false},
    {name: "djdjdjd", id: 2, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
    {name: "djdjdjd", id: 3, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
    {name: "djdjdjd", id: 4, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
    {name: "djdjdjd", id: 5, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
    {name: "djdjdjd", id: 6, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: true},
    {name: "djdjdjd", id: 7, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: true}
]
export const fetchTasks = () => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.FETCH_TASKS})
            dispatch({type: TaskActionTypes.FETCH_TASKS_SUCCESS, payload: notes})

        } catch (e) {
            dispatch({
                type: TaskActionTypes.FETCH_TASKS_ERROR,
                payload: 'Помилка при завантаженні'
            })
        }
    }
}

export const removeTask = (id: number) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.DELETE_TASK, payload: id})
            notes = notes.filter(note => note.id!== id)



        } catch (e) {
            dispatch({
                type: TaskActionTypes.FETCH_TASKS_ERROR,
                payload: 'Помилка при видаленні'
            })
        }
    }
}
export const archiveTask = (id: number) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.ARCHIVE_TASK, payload: id})
            let noteToArchive = notes.find(note => note.id === id)
            if (noteToArchive) {
                noteToArchive.archived = true;
            }
            console.log(id, "archived" )

        } catch (e) {
            dispatch({
                type: TaskActionTypes.FETCH_TASKS_ERROR,
                payload: 'Помилка при архівуванні'
            })
        }
    }
}
