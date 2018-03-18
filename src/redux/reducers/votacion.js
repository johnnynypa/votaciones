//@flow
import { VOTE } from '../actions/types';
import type {EstadoVotacion, Action} from '../../moduleTypes';

const initialState : EstadoVotacion = {
    candidatos : [
        {
            name: "Voto en blanco",
            id: 0
        },
        {
            name: "Pablo Vera",
            id: 1
        },
        {
            name: "Pedro Eslava",
            id: 2
        }
    ],
    votos: []
}

export default (state: EstadoVotacion = initialState, action:Action) => {
    switch(action.type){
        case (VOTE):{
            if(action.payload.idCandidato && action.payload.idUsuario){
                state.votos.push({
                    idUser: action.payload.idUsuario,
                    idCandidato: action.payload.idCandidato
                })
                return state;
            }else
                
                return state;
        }
        default:{
            return state;
        }
    }
}