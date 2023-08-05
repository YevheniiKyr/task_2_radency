import {Dispatch} from "redux";
import {TaskAction, TaskActionTypes, Category, Task} from "../../types/task";
import {Simulate} from "react-dom/test-utils";


// bd simulation

// let notes: Task[] = [
//     {name: "djdjdjd", id: 1, createdAt: new Date(), content: "dweddede", category: "Task",  dates: ["2/3/2000"], archived: false},
//     {name: "djdjdjd", id: 2, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
//     {name: "djdjdjd", id: 3, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
//     {name: "djdjdjd", id: 4, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
//     {name: "djdjdjd", id: 5, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
//     {name: "djdjdjd", id: 6, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: true},
//     {name: "djdjdjd", id: 7, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: true}
// ]


//if not prepopulated we need fetch at the start

// export const fetchTasks = () => {
//     return async (dispatch: Dispatch<TaskAction>) => {
//         try {
//             dispatch({type: TaskActionTypes.FETCH_TASKS})
//             dispatch({type: TaskActionTypes.FETCH_TASKS_SUCCESS, payload: notes})
//
//         } catch (e) {
//             dispatch({
//                 type: TaskActionTypes.FETCH_TASKS_ERROR,
//                 payload: 'Помилка при завантаженні'
//             })
//         }
//     }
// }

export const removeTask = (id: number) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.DELETE_TASK, payload: id})
            // bd simulation
            // notes = notes.filter(note => note.id!== id)

        } catch (e) {
            console.log("Помилка при видаленні")
        }
    }
}
export const archiveTask = (id: number) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.ARCHIVE_TASK, payload: id})
            // bd simulation
            // let noteToArchive = notes.find(note => note.id === id)
            // if (noteToArchive) {
            //     noteToArchive.archived = true;
            // }

        } catch (e) {
            console.log("Помилка при архівуванні")
        }
    }
}

export const unarchiveTask = (id: number) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.UNARCHIVE_TASK, payload: id})
            // bd simulation

            // let noteToUnarchive = notes.find(note => note.id === id)
            // if (noteToUnarchive) {
            //     noteToUnarchive.archived = false;
            // }

        } catch (e) {
            console.log("Помилка при розархівуванні")
        }
    }
}

export const addTask = (task: Task) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.CREATE_TASK, payload: task})
            // bd simulation

            // notes.push(task)
        } catch (e) {
            console.log("Помилка при створенні")
        }
    }
}

export const editTask = (task: Task) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.EDIT_TASK, payload: task})
            // bd simulation

            // let noteToEdit = notes.find(note => note.id === task.id)
            // if(noteToEdit){
            //     noteToEdit.name = task.name;
            //     noteToEdit.category = task.category;
            //     noteToEdit.content = task.content;
            //     noteToEdit.dates = task.dates;
            // }
        } catch (e) {
            console.log("Помилка при редагуванні")
        }
    }
}