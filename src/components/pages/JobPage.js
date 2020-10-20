import React, { useState, useEffect, useReducer } from 'react';
import Table from '../table/Table';
import JobModal from '../jobModal/JobModal';
import JobContext from '../../contexts/JobContext';
import ContentContainer from '../contentContainer/ContentContainer';
import { jobsReducer, JOBS_INIT, JOBS_DELETE } from '../../reducers/JobsReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getJobs, deleteJob } from '../../services/JobsService';

const JobPage = () => {
	const [jobs, jobsDispatch] = useReducer(jobsReducer, []);
    const [displayJobModal, setDisplayJobModal] = useState(false);
	const [selectedJob, setSelectedJob] = useState();
	
	useEffect(() => {
		const promise = getJobs();
		promise.then(data => jobsDispatch({ type: JOBS_INIT, jobs: data }));
  	}, []);
    
    const editJobs = job => {
        setSelectedJob(job);
        setDisplayJobModal(true);
    };
	
	const deleteJobs = async (job) => {
		const deleteJ = await deleteJob(job)
		jobsDispatch({type: JOBS_DELETE, deleteJ});
	};
	
	return (
		<div className="container-page">
			<JobContext.Provider value={{ selectedJob, setDisplayJobModal, jobsDispatch }}>
				<ContentContainer>
					<Table headers={["Job Title", "Actions"]}>
						{
							jobs.map(job => {
								return (
									<tr key={job.id}>
										<td>{job.name}</td>
										<td>
											<button
												className="button-edit"
												onClick={() => editJobs(job)}>
												EDIT
												<FontAwesomeIcon 
												icon={faUserEdit} 
												style={{ marginLeft: `5px` }} />
											</button>
											<button
												className="button-delete"
												onClick={() => deleteJobs(job)}>
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
					displayJobModal ? 
						<JobModal /> 
					: 
						null 
				}
			</JobContext.Provider>
		</div>
  	);
}

export default JobPage;
