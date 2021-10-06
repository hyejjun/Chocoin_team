export const initalState = {
    loading: false,
}

export const GET_TRADINGRECORD_REQUEST = "GET_TRADINGRECORD_REQUEST"
export const GET_TRADINGRECORD_SUCCESS = "GET_TRADINGRECORD_SUCCESS"
export const GET_TRADINGRECORD_ERROR = "GET_TRADINGRECORD_ERROR"

export const GET_ORDERLIST_REQUEST = "GET_ORDERLIST_REQUEST"
export const GET_ORDERLIST_SUCCESS = "GET_ORDERLIST_SUCCESS"
export const GET_ORDERLIST_ERROR = "GET_ORDERLIST_ERROR"

/* getTrading Record */
export const getTradingRecord_REQUEST = (data) => {
    return {
        type: GET_TRADINGRECORD_REQUEST,

    }
}

export const getTradingRecord_SUCCESS = (data) => {
    return {
        type: GET_TRADINGRECORD_SUCCESS,
        data
    }
}

export const getTradingRecord_ERROR = () => {
    return {
        type: GET_TRADINGRECORD_ERROR
    }
}

/* get Orderlist */
export const getOrderList_REQUEST = () => {
    return {
        type: GET_ORDERLIST_REQUEST,
    }
}

export const getOrderList_SUCCESS = (data) => {
    return {
        type: GET_ORDERLIST_SUCCESS,
        data
    }
}

export const getOrderList_ERROR = () => {
    return {
        type: GET_ORDERLIST_ERROR
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_TRADINGRECORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TRADINGRECORD_SUCCESS:
            // console.log(action.data.results, 'actionnnnnnnnnn============================')
            return {
                ...state,
                traderecord: action.data.results,
                loading: false,
            }
        case GET_TRADINGRECORD_ERROR:
            return {
                ...state,
                loading: false
            }
        
        /* get orderlist record */
        case GET_ORDERLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ORDERLIST_SUCCESS:
            return {
                ...state,
                orderList:action.data,
                loading: false,
            }
        case GET_ORDERLIST_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
export default reducer