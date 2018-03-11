// @flow
export type EstadoLogin = {
    isLogin: boolean,
    user:{
        nombre : string,
        dni : string
    }
}

export type Action = {
    type: string,
    payload: Object
}