//@flow
import { VOTE } from '../actions/types';
import type {EstadoVotacion, Action} from '../../moduleTypes';

const initialState : EstadoVotacion = {
    candidatos : [
        {
            partido : "Voto en Blanco",
            name: "",
            viceName: "",
            id: 0
        },
        {
            partido : "Alianza Verde",
            name: "Patricia Polo",
            viceName: "Martin Pizarro",
            id: 1
        },
        {
            partido : "Polo Democratico",
            name: "Hernan Perez",
            viceName: "Erick valderrama",
            id: 2
        },
        {
            partido : "Decentes",
            name: "Jairo Mendoza",
            viceName: "Maria Dominguez",
            id: 3
        },
        {
            partido : "Cambio radical",
            name: "Luis Mejia",
            viceName: "Ader Orozco",
            id: 4
        },
        {
            partido : "Cambio radical",
            name: "Laura Quiñonez",
            viceName: "Carmen Osorio",
            id: 5
        }
    ],
    votos: []
}

export default (state: EstadoVotacion = initialState, action:Action) => {
    switch(action.type){
        case (VOTE):{
            if(action.payload.idCandidato && action.payload.idUser){
                for (let voto of state.votos){
                    if(voto.idUser === action.payload.idUser){
                        return state;
                    }
                }
                state.votos.push({
                    idUser: action.payload.idUser,
                    idCandidato: action.payload.idCandidato
                })
            }
            return state;
        }
        default:{
            return state;
        }
    }
}