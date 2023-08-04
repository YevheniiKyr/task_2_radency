import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTable from "./components/TaskTable";
import CreateNoteModal from "./components/Modals/CreateNoteModal";

function App() {
    return (
        <div className="App">
            <TaskTable/>
            <CreateNoteModal/>
        </div>
    );
}

export default App;
