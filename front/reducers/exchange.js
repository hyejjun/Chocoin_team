export const initalState = {
    loading: false,
}

/* REDUX ACTIONS */
export const EXCHANGE_INSERT_REQUEST = "EXCHANGE_INSERT_REQUEST"
export const EXCHANGE_INSERT_SUCCESS = "EXCHANGE_INSERT_SUCCESS"
export const EXCHANGE_INSERT_ERROR = "EXCHANGE_INSERT_FAIL"



export const ExchangeInsert_REQUEST = (data) => {
    return {
        type: EXCHANGE_INSERT_REQUEST,
        data
    }
}

export const ExchangeInsert_SUCCESS = () => {
    return {
        type: EXCHANGE_INSERT_SUCCESS,
    }
}

export const ExchangeInsert_ERROR = () => {
    return {
        type: EXCHANGE_INSERT_ERROR,
    }
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case EXCHANGE_INSERT_REQUEST:
            return {
                ...state,
                loading: true,
                orderData : action.data
            }
        case EXCHANGE_INSERT_SUCCESS:
            return {
                ...state,
                loading : false,
            }
        case EXCHANGE_INSERT_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer