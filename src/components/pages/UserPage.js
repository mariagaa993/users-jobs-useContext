import React, { useState, useEffect, useReducer } from 'react';
import Table from '../table/Table';
import ContentContainer from '../contentContainer/ContentContainer';
import UserContext from '../../contexts/UserContext';
import UserModal from '../userModal/UserModal';
import NewUserModal from '../newUserModal/NewUserModal';
import { usersReducer, USERS_INIT, USERS_DELETE } from '../../reducers/UsersReducer';
import { jobsReducer, JOBS_INIT } from '../../reducers/JobsReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getUsers, deleteUser } from '../../services/UsersService';
import { getJobs } from '../../services/JobsService';

const UserPage = () => {
    const [users, usersDispatch] = useReducer(usersReducer, []);
    const [jobs, jobsDispatch] = useReducer(jobsReducer, []);
    const [selectedUser, setSelectedUser] = useState();
    const [displayNewUser, setDisplayNewUser] = useState(false);
    const [displayUserModal, setDisplayUserModal] = useState(false);

    useEffect(() => {
        const promise = getUsers();
        promise.then(data => usersDispatch({ type: USERS_INIT, users: data }));
    }, []);

    useEffect(() => {
        const promise = getJobs();
        promise.then(data => jobsDispatch({ type: JOBS_INIT, jobs: data }));
    }, []);

    const editUser = user => {
        setSelectedUser(user);
        setDisplayUserModal(true);
    };
    
    const deleteUsers = async (user) => {
		const deleteU = await deleteUser(user)
		usersDispatch({type: USERS_DELETE, deleteU});
	};

    return (
        <div className="container-page">
            <UserContext.Provider value={{ 
                jobs, 
                setDisplayUserModal, 
                selectedUser, 
                usersDispatch,
                setDisplayNewUser }}>     
                <button 
                    className="button-new-user" 
                    type="button" 
                    onClick={() => setDisplayNewUser(true)} >
                    ADD NEW USER
                    <FontAwesomeIcon 
                        icon={faUserPlus} 
                        style={{ marginLeft: `5px` }} />
                </button>        
                <ContentContainer>
                    <Table headers={["Name", "Avatar", "Job Title", "Actions"]}>
                        {
                            users.map(user => {
                                const job = jobs.find(job => job.id == user.jobId) || { name: "Not Found" };
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td><img className="avatar-img" src={user.avatar} /></td>
                                        <td>{job.name}</td> 
                                        <td>
                                            <button
                                                className="button-edit"
                                                onClick={() => editUser(user)}>
                                                EDIT
                                                <FontAwesomeIcon 
                                                    icon={faUserEdit} 
                                                    style={{ marginLeft: `5px` }} />
                                            </button>
                                            <button
                                                className="button-delete"
                                                onClick={() => deleteUsers(user) }>
                                                DELETE
                                                <FontAwesomeIcon 
                                                    icon={faTrash} 
                                                    style={{ marginLeft: `5px` }} />
                                            </button>
                                        </td>      
                                    </tr>
                                );
                            })
                        }
                    </Table>
                </ContentContainer>
                {
                    displayUserModal ?
                        <UserModal />
                    :
                        null 
                }
                {
                    displayNewUser ?
                        <NewUserModal />
                    :
                        null 
                }
            </UserContext.Provider>  
        </div>
    );
}

export default UserPage;
