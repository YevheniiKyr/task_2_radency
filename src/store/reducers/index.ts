import {combineReducers} from "redux";
import {taskReducer} from "./taskReducer";

export const rootReducer = combineReducers(
    {
        task: taskReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>