import axios from 'axios';

const urlUsers = 'https://5f518d325e98480016123ada.mockapi.io/api/v1/users/';


export const getUsers = async () => {
    try {
        const res = await axios.get(urlUsers);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getUsers: ${err}`);
    }
};

export const addUser = async (newUser, newJob) => {
    try {
        const addNewUser = {
            name: newUser,
            jobId: newJob
        };
        const res = await axios.post(urlUsers, addNewUser);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - addUser: ${err}`);
    }
};

export const editUser = async (selectedUser, newName, newJobId) => {
    try {
        const changeUser = {
            ...selectedUser,
            name: newName,
            jobId: newJobId
        };
        const res = await axios.put(urlUsers + changeUser.id, changeUser);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - editUser: ${err}`);
    }
};

export const deleteUser = async (user) => {
    try {
        const res = await axios.delete(urlUsers + user.id);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - deleteUser: ${err}`);
    }
}
