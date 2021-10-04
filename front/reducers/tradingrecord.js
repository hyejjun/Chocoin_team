export const initalState = {
    loading:false,
}

export const GET_TRADINGRECORD_REQUEST = "GET_TRADINGRECORD_REQUEST"
export const GET_TRADINGRECORD_SUCCESS = "GET_TRADINGRECORD_SUCCESS"
export const GET_TRADINGRECORD_ERROR = "GET_TRADINGRECORD_ERROR"

export const getTradingRecord_REQUEST = (data) => {
    return{
        type:GET_TRADINGRECORD_REQUEST,
        
    }
}

export const getTradingRecord_SUCCESS = (data) => {
    console.log(data,'dataaaaaaaaaaaa')
    return{
        type:GET_TRADINGRECORD_SUCCESS,
        data
    }
}

export const getTradingRecord_ERROR = () =>{
    return{
        type:GET_TRADINGRECORD_ERROR
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_TRADINGRECORD_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_TRADINGRECORD_SUCCESS:
            console.log(action,'action')
            return{
                ...state,
                data:action.data,
                loading:false,
            }
        case GET_TRADINGRECORD_ERROR:
            console.log('error')
            return{
                ...state,
                loading:false
            }
        default:
            return state
    }
}
export default reducer