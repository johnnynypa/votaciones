//@flow
import {LOGOUT, SET_CURRENT_USER } from '../actions/types';
import type { EstadoLogin, Action} from '../../moduleTypes'

const initialState : EstadoLogin = {
    isLogin: false,
    user: {
        nombre: "",
        dni: ""
    }
}



export default ( state : EstadoLogin = initialState, action: Action) => {
    switch(action.type){
        case (SET_CURRENT_USER):{
            return {
                isLogin : true,
                user: action.payload
            }
        }
        case (LOGOUT):{
            return {
                isLogin : false,
                user: {}
            }
        }
        default:{
            return state;
        }
    }
}