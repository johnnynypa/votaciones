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
    idCandidato: number,
    fecha: any
}

export type Candidato = {
    name: string,
    id: number
}

export type Action = {
    type: string,
    payload: Object
}