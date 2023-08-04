import {TaskAction, TaskActionTypes, TaskState} from "../../types/task";


const initState: TaskState = {
    tasks: [],
    loading: false,
    error: null
}

export const taskReducer = (state = initState, action: TaskAction): TaskState => {
    switch (action.type){
        case TaskActionTypes.FETCH_TASKS:
            return {loading:true, error:null, tasks: []}
        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return {loading:false, error:null, tasks: action.payload}
        case TaskActionTypes.FETCH_TASKS_ERROR:
            return {loading:false, error: action.payload, tasks: []}
        case TaskActionTypes.DELETE_TASK:
            return {loading: false, error:null, tasks: state.tasks.filter(task => task.id !== action.payload) }
        case TaskActionTypes.ARCHIVE_TASK:
            return {loading: false, error:null, tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return { ...task, archived: true };
                    }
                    return task;
                })}
        default:
            return state
    }
}
