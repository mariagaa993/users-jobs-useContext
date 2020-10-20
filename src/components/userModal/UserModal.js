import React, { useState, useContext } from 'react';
import Modal from '../modal/Modal';
import UserContext from '../../contexts/UserContext';
import { USERS_EDIT } from '../../reducers/UsersReducer';
import { editUser } from '../../services/UsersService';

const UserModal = () => {
    const { jobs, setDisplayUserModal, selectedUser, usersDispatch } = useContext(UserContext);
    const [newName, setNewName] = useState(selectedUser);
    const [newJobId, setNewJobId] = useState(selectedUser.jobId);

    const changeName = event => setNewName(event.target.value);
    const changeJobId = event => setNewJobId(event.target.value);

    const save = async () => {
        const editU = await editUser(selectedUser, newName, newJobId);
        usersDispatch({type: USERS_EDIT, editU});
        close();
    };

    const close = () => setDisplayUserModal(false);

    return (
        <Modal title="Edit User" close={close}>
            <form>
                <input type="text" defaultValue={selectedUser.name} onChange={changeName} />
                <select defaultValue={selectedUser.jobId} onChange={changeJobId}>
                    {
                        jobs.map(job => {
                            return (
                                <option value={job.id}>
                                    {job.name}
                                </option>
                            )
                        })
                    }
                </select>
                <button className="button-modal" type="button" onClick={save}>Save</button>
            </form>
        </Modal>
    );
}

export default UserModal;
