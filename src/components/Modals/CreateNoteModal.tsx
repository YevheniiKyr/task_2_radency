import React, {useState} from 'react';
import {Category, Task} from "../../types/task";
import {Dropdown, Form, Modal, Button} from "react-bootstrap";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {parseDates} from "../../utils/helpers";
import FillFieldsModal from "./fillFieldsModal";


type CreateNoteModalProps = {
    show: boolean;
    onHide: () => void;
};
const CreateNoteModal: React.FC<CreateNoteModalProps> = ({show, onHide}) => {


    const [name, setName] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [category, setCategory] = useState<Category>('Idea')
    const categories: Category[] = ["Task", "Random Thought", "Idea"];
    const [fillFieldsVisible, setFillFieldsVisible] = useState<boolean>(false)

    const {tasks} = useTypedSelector(state => state.task)

    const {addTask} = useActions()


    const createNote = () => {
        if (name.trim() === '' || !category || content.trim() === '') {
            setFillFieldsVisible(true)
            return
        }

        let task:Task = {
            id: tasks.length+1,
            createdAt:  new Date(),
            archived: false,
            content: content,
            name: name,
            category: category,
            dates: parseDates(content)
        }
        addTask(task)
        onHide()
    }

    return (
        <><Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create note
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
                <Button variant="outline-success" onClick={createNote}>Create</Button>
            </Modal.Footer>
        </Modal>
            <FillFieldsModal show={fillFieldsVisible} onHide={() => setFillFieldsVisible(false)}/>
            </>

);
};

export default CreateNoteModal;