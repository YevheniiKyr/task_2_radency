import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import type {} from 'redux-thunk/extend-redux'
import {Simulate} from "react-dom/test-utils";
import {Spinner} from "react-bootstrap";
import {Months} from "../utils/consts";
import '../css/notes.css';
import {useActions} from "../hooks/useActions";
import EditNoteModal from "./Modals/editNoteModal";
import {Task} from "../types/task";
import {formatDate} from "../utils/helpers";

const TaskTable: React.FC = () => {
    const {tasks} = useTypedSelector(state => state.task)

    const {removeTask, archiveTask} = useActions()
    const [editNoteVisible, setEditNoteVisible] = useState<boolean>(false)
    const [noteToEdit, setNoteToEdit] = useState<Task>()

    // bd simulation

    // useEffect(() => {
    //     fetchTasks().then()
    // }, [])



    useEffect(() => {
        console.log('RERENDER TaskTable')
    }, [tasks])

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
                                <button className="table_button" onClick = {() => {
                                    setEditNoteVisible(true)
                                    setNoteToEdit(task)

                                }}>
                                    <img src={require("../icons/edit.png")} className="table_icons" alt="Edit Icon"/>
                                </button>
                                <button className="table_button" onClick={() => removeTask(task.id)}>
                                    <img src={require("../icons/delete.png")} className="table_icons"
                                         alt="Delete Icon"/>
                                </button>
                                <button className="table_button" onClick={() => {
                                    archiveTask(task.id)
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
            {noteToEdit && (
            <EditNoteModal  show = {editNoteVisible}
                            onHide = {() => setEditNoteVisible(false)}
                            note={noteToEdit}/>
            )
            }
        </div>
    )
}
export default TaskTable