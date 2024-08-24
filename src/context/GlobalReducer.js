import { AGREGAR_RESERVA } from "../types";

export default(state, action)=>{
    switch(action.type){
        case AGREGAR_RESERVA:
            return{
                ...state,
                reserva: action.payload
            }
        default:
            return state
    }
}