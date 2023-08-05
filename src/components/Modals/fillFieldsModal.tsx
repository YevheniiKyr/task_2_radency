import React from 'react';
import {Modal} from "react-bootstrap";
import {Task} from "../../types/task";


type FillFieldsModalProps = {
    show: boolean;
    onHide: () => void;

};
const FillFieldsModal: React.FC<FillFieldsModalProps> = ({show, onHide}) => {
    return (

            <Modal show={show} onHide={onHide} centered backdrop="static" className = {"my-modal-backdrop"}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       Fill all fields
                    </Modal.Title>
                </Modal.Header>
                </Modal>
    );
};

export default FillFieldsModal;