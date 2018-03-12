import { combineReducers } from 'redux';
import login from './reducers/login';
import votacion from './reducers/votacion';

export default combineReducers({
    login,
    votacion
});
