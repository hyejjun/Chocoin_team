export const initalState = {
    loading: false,
}

export const MYPAGE_GET_REQUEST = "MYPAGE_GET_REQUEST"
export const MYPAGE_GET_SUCCESS = "MYPAGE_GET_SUCCESS"
export const MYPAGE_GET_ERROR = "MYPAGE_GET_ERROR"


export const MypageGet_REQUEST = (data) => {
    console.log("들어옴 --- ",data);
    return {
        type: MYPAGE_GET_REQUEST,
        data
    }
}

export const MypageGet_SUCCESS = () => {
    return {
        type: MYPAGE_GET_SUCCESS,
    }
}

export const MypageGet_ERROR = () => {
    return {
        type: MYPAGE_GET_ERROR,
    }
}


const reducer = (state = initalState, action) => {
    console.log(action);
    switch (action.type) {
        case MYPAGE_GET_REQUEST:
            console.log('first rendering')
            return {
                ...state,
                loading : true,
            
            }
        case MYPAGE_GET_SUCCESS:
            return {
                ...state,
                mypaged: action.data,
                loading: false,
            }
        case MYPAGE_GET_ERROR:
            console.log('err')
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer