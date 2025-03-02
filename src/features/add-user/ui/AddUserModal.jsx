import Modal from '../../../shared/ui/modal/ui/Modal';
import AddUserForm from './AddUserForm';

const AddUserModal = ({ isOpen, close }) => {
    return (
        <Modal isOpen={isOpen} close={close}>
            <Modal.Title>Add User</Modal.Title>
            <Modal.Body>
                <p>
                    Fill in the details below to add a new user. Ensure that all
                    fields are filled out correctly.
                </p>
                <AddUserForm handleCancel={close} onSubmitEvent={close} />
            </Modal.Body>
        </Modal>
    );
};

export default AddUserModal;
