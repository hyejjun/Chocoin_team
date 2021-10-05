export const initalState = {
    loading: false,
}
export const MYPAGE_GET_REQUEST = "MYPAGE_GET_REQUEST"
export const MYPAGE_GET_SUCCESS = "MYPAGE_GET_SUCCESS"
export const MYPAGE_GET_ERROR = "MYPAGE_GET_ERROR"


export const MypageGet_REQUEST = (data) => {
    return {
        type: MYPAGE_GET_REQUEST,
        data
    }
}

export const MypageGet_SUCCESS = (data,data2) => {
    return {
        type: MYPAGE_GET_SUCCESS,
        data,
        data2
    }
}

export const MypageGet_ERROR  = () => {
    return {
        type: MYPAGE_GET_ERROR,
    }
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case MYPAGE_GET_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case MYPAGE_GET_SUCCESS:
            return {
                ...state,
                pagelist : action.data,
                coininfo : action.data2, 
                loading : false,
            }
        case MYPAGE_GET_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer