import React from 'react';
import {HYDRATE} from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import exchange from './exchange';
import tradingrecord from './tradingrecord';
import mypage from './mypage';
import user from './user';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
  };
  

const rootReducer = (state,action) => {
    switch(action.type){
        case HYDRATE:
            return action.payload
        default:{
            const combineReducer = combineReducers({
                exchange, tradingrecord, mypage, user
            })
            return combineReducer(state,action)
        }
    }
}

export default rootReducer;
