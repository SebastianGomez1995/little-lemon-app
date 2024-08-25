import { UPDATE_TIMES, UPDATE_BOOK} from "../types";

const GlobalReducer = (state, action)=>{
    switch(action.type){
        case UPDATE_TIMES:
            return{
                ...state,
                availableTimes: action.payload
            };
        case UPDATE_BOOK:
            return{
                ...state,
                book: action.payload
            }
        default:
            return state
    }
}

export default GlobalReducer