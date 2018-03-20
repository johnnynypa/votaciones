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
    votos: [
        {
            idUser: 1,
            idCandidato: 1,
            fecha: "11:30"
        },
        {
            idUser: 3,
            idCandidato: 3,
            fecha: "13:45"
        },
        {
            idUser: 4,
            idCandidato: 2,
            fecha: "13:49"
        },
        {
            idUser: 5,
            idCandidato: 1,
            fecha: "15:00"
        },
        {
            idUser: 6,
            idCandidato: 1,
            fecha: "15:12"
        }
    ]
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