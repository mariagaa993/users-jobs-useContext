import React, { useState, useContext } from 'react';
import Modal from '../modal/Modal';
import UserContext from '../../contexts/UserContext';
import { USERS_ADD } from '../../reducers/UsersReducer';
import { addUser } from '../../services/UsersService';

const NewUserModal = () => {
    const { jobs, setDisplayNewUser, usersDispatch } = useContext(UserContext);
    const [newUser, setNewUser] = useState('');
    const [newJobId, setNewJobId] = useState('');

    const changeName = event => setNewUser(event.target.value);
    const changeJobId = event => setNewJobId(event.target.value);

    const addNewUser = async () => {
        const addU = await addUser(newUser, newJobId);
        usersDispatch({type: USERS_ADD, addU});
        close();
    };

    const close = () => setDisplayNewUser(false);

    return (
        <Modal title="New User" close={close}>
            <form>
                <input type="text" onChange={changeName} placeholder="Full name" />
                <select defaultValue="-1" onChange={changeJobId}>
                    <option value="-1" disabled selected>Choose job</option>
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
                <button 
                    className="button-modal" 
                    type="button" 
                    onClick={addNewUser}>
                    Add New User
                </button>
            </form>
        </Modal>
    );
}

export default NewUserModal;
