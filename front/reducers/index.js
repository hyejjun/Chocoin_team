import React from 'react'
import {HYDRATE} from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import exchange from './exchange'

const rootReducer = (state,action) => {
    switch(action.type){
        case HYDRATE:
            return action.payload
        default:{
            const combineReducer = combineReducers({
                exchange,  
            })
            return combineReducer(state,action)
        }
    }
}

export default rootReducer