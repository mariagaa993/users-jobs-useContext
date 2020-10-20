import React, { useState, useContext } from 'react';
import JobContext from '../../contexts/JobContext';
import Modal from '../modal/Modal';
import { JOBS_EDIT } from '../../reducers/JobsReducer';
import { editJob } from '../../services/JobsService';

const JobModal = () => {
    const { setDisplayJobModal, selectedJob, jobsDispatch } = useContext(JobContext);
    const [newJob, setNewJob] = useState(selectedJob);
    const changeJob = event => setNewJob(event.target.value);

    const save = async () => {
        const editJ = await editJob(selectedJob, newJob);
        jobsDispatch({type: JOBS_EDIT, editJ});
        close();
    };

    const close = () => setDisplayJobModal(false);
        
    return (
        <Modal title="Edit Job" close={close}>
            <form>
                <input type="text" defaultValue={selectedJob.name} onChange={changeJob}/>               
                <button className="button-modal" type="button" onClick={save}>Save</button>
            </form>
        </Modal>
    );
}

export default JobModal;
