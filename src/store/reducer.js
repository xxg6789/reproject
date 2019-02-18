import * as types from "./types";

const reducer =(state,{type,payload})=>{
    switch (type) {
        case types.VIEW_NAV:
            return {
                ...state,
                bNav:payload
            };
        case types.VIEW_FOOT:
            return {
                ...state,
                bFoot:payload
            };
        case types.VIEW_LOADING:
            return {
                ...state,
                bLoading:payload
            };
        case types.UPDATE_HOME:
            return {
                ...state,
                home:payload
            };
        default:
            return state;
    }
}


export default reducer;