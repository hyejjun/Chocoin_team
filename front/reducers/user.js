export const initialState = {
    loading: false,
    isLogin: false,
    Id_check: ''
}

const firstState = "firstState"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS";
const USER_JOIN_ERROR = "USER_JOIN_ERROR";

const USER_ID_CHECK = "USER_ID_CHECK";
const USER_ID_SUCCESS = "USER_ID_SUCCESS";
const USER_ID_ERROR = "USER_ID_ERROR";

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
                Id_check: action.data
            }
        default:
            return state
    }
}

export default reducer