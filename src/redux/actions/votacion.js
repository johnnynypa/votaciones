//@flow

import { VOTE } from './types';
import type { Voto, Action } from '../../moduleTypes.js';

export const votar = (voto : Voto) :Action => {
    return {
        type: VOTE,
        payload: voto
    }
}