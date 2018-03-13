// @flow
export type EstadoLogin = {
    isLogin: boolean,
    user:{
        id: number,
        nombre : string,
        dni : string
    }
}

export type EstadoVotacion = {
    candidatos: Array<Candidato>,
    votos: Array<Voto>
}

export type Voto = {
    idUser: number,
    idCandidato: number
}

export type Candidato = {
    partido: string,
    name: string,
    viceName: string,
    id: number
}

export type Action = {
    type: string,
    payload: Object
}