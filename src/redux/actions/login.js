import { LOGOUT, SET_CURRENT_USER} from './types';

export const logout = ()=> {
    return {
        type: LOGOUT
    }
}

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}