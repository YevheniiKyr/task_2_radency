import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTable from "./components/TaskTable";
import CreateNoteModal from "./components/Modals/CreateNoteModal";
import {Button} from "react-bootstrap";
import StatisticsTable from "./components/StatisticsTable";
import ArchiveTable from "./components/ArchiveTable";

function App() {

    const[createNoteVisible, setCreateNoteVisible] = useState<boolean>(false)
    const[archiveVisible, setArchiveVisible] = useState<boolean>(false)

    return (
        <div className="App">
            <TaskTable/>
            <div>
            <button id = "openCreateWindow" className = "custom_button" onClick={()=>setCreateNoteVisible(true)}>  Create  </button>
            </div>
            <br></br>
            <br></br>
            <CreateNoteModal show = {createNoteVisible} onHide = {() => setCreateNoteVisible(false)}/>
            <StatisticsTable/>
            <div style ={{display: archiveVisible? 'none' : ''}}>
            <button id = "openArchive" className = "custom_button" onClick={()=>setArchiveVisible(true)}>  Open Archive </button>
            </div>
            <ArchiveTable visible = {archiveVisible}/>
            <button style ={{display: archiveVisible? '' : 'none'}} id = "closeArchive" className = "custom_button" onClick={()=>setArchiveVisible(false)}>
                Close Archive
            </button>

        </div>
    );
}

export default App;
