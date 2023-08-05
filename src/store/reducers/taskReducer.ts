import {TaskAction, TaskActionTypes, TaskState} from "../../types/task";


const initState: TaskState = {
    tasks: [
        {name: "djdjdjd", id: 1, createdAt: new Date(), content: "dweddede", category: "Task",  dates: ["2/3/2000"], archived: false},
        {name: "djdjdjd", id: 2, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
        {name: "djdjdjd", id: 3, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
        {name: "djdjdjd", id: 4, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
        {name: "djdjdjd", id: 5, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: false},
        {name: "djdjdjd", id: 6, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: true},
        {name: "djdjdjd", id: 7, createdAt: new Date(), content: "dweddede", category: "Task", dates: ["2/3/2000"], archived: true}
    ],
}

export const taskReducer = (state = initState, action: TaskAction): TaskState => {
    switch (action.type){

        case TaskActionTypes.DELETE_TASK:
            return {tasks: state.tasks.filter(task => task.id !== action.payload) }
        case TaskActionTypes.ARCHIVE_TASK:
            return {tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return { ...task, archived: true };
                    }
                    return task;
                })}
        case TaskActionTypes.CREATE_TASK:
            return {tasks: [...state.tasks, action.payload]}
        case TaskActionTypes.EDIT_TASK:
            return { tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return action.payload;
                    }
                    return task;
                })}
        case  TaskActionTypes.UNARCHIVE_TASK:
            return { tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return { ...task, archived: false };
                    }
                    return task;
                })}
        default:
            return state

    }
}
