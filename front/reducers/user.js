export const initialState = {
    loading: false,
    IsLogin: false,
    Id_check: '',
    data:'',
    userid:'',
}

const firstState = "firstState"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS";
const USER_JOIN_ERROR = "USER_JOIN_ERROR";

const USER_ID_CHECK = "USER_ID_CHECK";
const USER_ID_SUCCESS = "USER_ID_SUCCESS";
const USER_ID_ERROR = "USER_ID_ERROR";

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";

const USER_LOGOUT = "USER_LOGOUT";

export const user_join_request = data => {
    return {
        type: USER_JOIN_REQUEST,
        data
    }
}
export const user_id_check = data => {
    return {
        type: USER_ID_CHECK,
        data
    }
}
export const user_login_request = data => {
    return{
        type: USER_LOGIN_REQUEST,
        data,
    }
}
export const user_logout = () => {
    return{
        type:USER_LOGOUT,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'firstState':
            return {
                ...state,
                Id_check: ''
            }
        case USER_JOIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_JOIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user_info: action.user_info
            }
        case USER_JOIN_ERROR:
            return {
                ...state,
                loading: false,
            }
        case USER_ID_CHECK:
            return {
                ...state,
                loading: false,
                Id_check: action,
            }
        case USER_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                Id_check: action.data,
            }
        case USER_ID_ERROR:
            return {
                ...state,
                loading: false,
                Id_check: action.data,
                // IsLogin:undefined,
            }
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                IsLogin:true,
                loading:false,
                data:action.data,
                userid:action.userid,
            }
        case USER_LOGIN_ERROR:
            return{
                ...state,
                loading:false,
                data:action.data,
                IsLogin:false,
            }
        case USER_LOGOUT:
            return{
                ...state,
                data:'logout',
                IsLogin:false,
                userid:'',
            }
        default:
            return state
    }
}

export default reducer