import React, {useState} from 'react';
import {Category, Task} from "../../types/task";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {parseDates} from "../../utils/helpers";
import {useActions} from "../../hooks/useActions";
import FillFieldsModal from "./fillFieldsModal";

type EditNoteModalProps = {
    show: boolean;
    onHide: () => void;
    note: Task
};
const EditNoteModal: React.FC<EditNoteModalProps> = ({show, onHide, note}) => {

    const [name, setName] = useState<string>(note.name)
    const [content, setContent] = useState<string>(note.content)
    const [category, setCategory] = useState<Category>(note.category)
    const categories: Category[] = ["Task", "Random Thought", "Idea"];
    const [fillFieldsVisible, setFillFieldsVisible] = useState<boolean>(false)

    const {editTask} = useActions()
    const editNote = () => {
        if (name.trim() === '' || !category || content.trim() === '') {
            setFillFieldsVisible(true)
            return
        }
        let task: Task = {
            id: note.id,
            createdAt: note.createdAt,
            archived: note.archived,
            content: content,
            name: name,
            category: category,
            dates: parseDates(content)
        }
        editTask(task)
        onHide()
    }
    return (
        <><Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit note
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{category || "Оберіть категорію"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {categories.map(category => <Dropdown.Item
                                    onClick={() => setCategory(category)}
                                    key={category}
                                >
                                    {category}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2"
                        placeholder="Enter name here"/>
                    <Form.Control
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="mt-2"
                        placeholder="Enter text here"/>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
                <Button variant="outline-success" onClick={editNote}>Save</Button>
            </Modal.Footer>
        </Modal><FillFieldsModal show={fillFieldsVisible} onHide={() => setFillFieldsVisible(false)}/></>


    );
};

export default EditNoteModal;