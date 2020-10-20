export const USERS_INIT = "USERS_INIT";
export const USERS_ADD = "USERS_ADD";
export const USERS_EDIT = "USERS_EDIT";
export const USERS_DELETE = "USERS_DELETE";


export const usersReducer = (state, action) => {
    switch (action.type) {
		case USERS_INIT: 
			return action.users;
		case USERS_ADD:
			return [...state, action.addU];
		case USERS_EDIT: 
			return state.map(user => {
				if (user.id === action.editU.id) {
					user.name = action.editU.name;
					user.jobId = action.editU.jobId;;
				}
				return user;
			}
		);
		case USERS_DELETE: 
			return state.filter(user => user.id !== action.deleteU.id);
      	default:
        	return state;
    }
}
