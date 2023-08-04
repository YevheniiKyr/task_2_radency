import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchTasks} from "../store/action-creators/task";
import type {} from 'redux-thunk/extend-redux'
import {Simulate} from "react-dom/test-utils";
import {Spinner} from "react-bootstrap";
import {Months} from "../utils/consts";
import '../css/notes.css';
import {useActions} from "../hooks/useActions";

const TaskTable: React.FC = () => {
    const {tasks, loading, error} = useTypedSelector(state => state.task)

    const {fetchTasks, removeTask, archiveTask} = useActions()

    useEffect(() => {
        fetchTasks().then()
    }, [])

    if (loading) {
        return <Spinner className={"d-flex justify-content-center align-content-center"}
                        style={{width: "30rem", height: "30rem"}} animation={"border"}></Spinner>
    }

    function formatDate(date: Date) {
        return `${Months[date.getMonth()]} ${date.getDay() - 1}, ${date.getFullYear()}`;
    }

    return (
        <div>
            <table id="tableNotes">
                <thead>
                <tr>
                    <th style={{display: "none"}}>ID</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Content</th>
                    <th>Category</th>
                    <th>Dates</th>

                    <th>
                        <img src={require("../icons/archive.png")} className="table_icons" alt="Archive Icon"/>
                        <img src={require("../icons/delete.png")} className="table_icons" alt="Delete Icon"/>
                    </th>
                </tr>
                </thead>
                <tbody id="notes">
                {
                    tasks.filter(task => !task.archived).map(task => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{formatDate(task.createdAt)}</td>
                            <td>{task.content}</td>
                            <td>{task.category}</td>
                            <td>{task.dates}</td>
                            <td>
                                <button className="table_button">
                                    <img src={require("../icons/edit.png")} className="table_icons" alt="Edit Icon"/>
                                </button>
                                <button className="table_button" onClick={() => removeTask(task.id)}>
                                    <img src={require("../icons/delete.png")} className="table_icons"
                                         alt="Delete Icon"/>
                                </button>
                                <button className="table_button" onClick={() => {
                                    archiveTask(task.id)
                                    fetchTasks()
                                }
                                }>
                                    <img src={require("../icons/archive.png")} className="table_icons"
                                         alt="Archive Icon"/>
                                </button>

                            </td>
                        </tr>

                    ))

                }

                </tbody>
            </table>
        </div>
    )
}
export default TaskTable