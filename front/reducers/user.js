const initialState = {
    loadding:false,
    isLogin:false,
    user_info:{},
    id_check:''
}

const firstState = "firstState"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
const USER_JOIN_ERROR = "USER_JOIN_ERROR";

const USER_ID_CHECK = "USER_ID_CHECK";

export const user_join_request = data => {
    return{
        type:USER_JOIN_REQUEST,
        data
    }
}

export const user_id_check = (data) => {
    return{
        type: USER_ID_CHECK,
        data
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'firstState' :
            return{
                ...state,
                id_check:''
            }
        case USER_JOIN_REQUEST:
            return{
                ...state,
                loadding:true,
            }
        case USER_JOIN_ERROR:
            return{
                ...state,
                loadding:false,
            }
        case USER_ID_CHECK:
            return{
                ...state,
                loadding:false,
                id_check:action.data
            }
        default:
            return state
    }
}

export default reducer