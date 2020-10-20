import axios from 'axios';

const urlJobs = 'https://5f518d325e98480016123ada.mockapi.io/api/v1/jobs/';


export const getJobs = async () => {
    try {
        const res = await axios.get(urlJobs);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getJobs: ${err}`);
    }
};

export const editJob = async (selectedJob, newJob) => {
    try {
        const changeJob = {
            ...selectedJob,
            name: newJob
        };
        const res = await axios.put(urlJobs + changeJob.id, changeJob);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - editJob: ${err}`);
    }
};

export const deleteJob = async (job) => {
    try {
        const res = await axios.delete(urlJobs + job.id);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - deleteJob: ${err}`);
    }
}
