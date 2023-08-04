import React, {useState} from 'react';
import {Category} from "../../types/task";
import {Dropdown, Form, Modal, Button} from "react-bootstrap";

const CreateNoteModal: React.FC = ({show, onHide}) => {

    const [name, setName] = useState<String>('')
    const [content, setContent] = useState<String>('')
    const [category, setCategory] = useState<Category>('Idea')

    return (
        <Modal show={show} onHide={onHide} centered>
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
                            {
                                Category.map(type =>
                                    <Dropdown.Item
                                        onClick={() => setSelectedCategory(type)}
                                        key={type._id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2"
                        placeholder="Введіть назву товару"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-2"
                        placeholder="Введіть ціну товару"
                        type="number"
                    />
                    <Form.Control
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        className="mt-2"
                        placeholder="Введіть опис товару"
                    />


                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addProduct}>Додати</Button>
            </Modal.Footer>
        </Modal>
);
};

export default CreateNoteModal;