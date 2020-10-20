export const JOBS_INIT = "JOBS_INIT";
export const JOBS_EDIT = "JOBS_EDIT";
export const JOBS_DELETE = "JOBS_DELETE";

export const jobsReducer = (state, action) => {
    switch (action.type) {
      	case JOBS_INIT:
			return action.jobs;
		case JOBS_EDIT: 
			return state.map(job => {
				if (job.id === action.editJ.id) {
					job.name = action.editJ.name;
				}
				return job;
			}
		);
		case JOBS_DELETE: 
			return state.filter(job => job.id !== action.deleteJ.id);
      	default:
        	return state;
    }
}
