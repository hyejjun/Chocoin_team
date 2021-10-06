import {createWrapper} from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore,combineReducers } from 'redux'
import reducer from '../reducers'       
import {composeWithDevTools} from 'redux-devtools-extension'
import createSaga from 'redux-saga'
import rootSaga from '../saga/index'


const configureStore = ()=>{
    const sagaMiddleware = createSaga()
    const middlewares = [sagaMiddleware]
   
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
 
    const Store = createStore(reducer,enhancer)
    Store.sagaTask = sagaMiddleware.run(rootSaga)
    
    return Store
}


const wrapper = createWrapper(configureStore,{
    debug : process.env.NODE_ENV === 'development'
})     
export default wrapper