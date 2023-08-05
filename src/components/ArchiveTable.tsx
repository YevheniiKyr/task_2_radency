import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {formatDate} from "../utils/helpers";
import {useActions} from "../hooks/useActions";

type ArchiveTableProps = {
    visible: boolean
}
const ArchiveTable: React.FC<ArchiveTableProps> = ({visible}) => {


    const {unarchiveTask} = useActions()
    const {tasks} = useTypedSelector(state => state.task)

    useEffect(() => {
        console.log('RERENDER ArchiveTable')
    }, [tasks])
    return (
        <div id = "archive" style = {{display: visible? '' : 'none'}}>
            <h2> Archive </h2>
            <table id="tableArchive" className={ "myTable" }>
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
                    tasks.filter(task => task.archived).map(task => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{formatDate(task.createdAt)}</td>
                            <td>{task.content}</td>
                            <td>{task.category}</td>
                            <td>{task.dates}</td>
                            <td>
                                <button className="table_button" onClick={() => {
                                    unarchiveTask(task.id)
                                }
                                }>
                                    <img src={require("../icons/unarchive.png")} className="table_icons"
                                         alt="Archive Icon"/>
                                </button>

                            </td>
                        </tr>

                    ))

                }

                </tbody>
            </table>
        </div>
    );
};

export default ArchiveTable;