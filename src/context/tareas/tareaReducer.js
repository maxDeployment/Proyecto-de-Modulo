import { 
    FORMULARIO_PROYECTO
 } from '../../types';

export default(state, dispatch) => {
    switch(dispatch.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
            }
        default:
            return state;
    }
}