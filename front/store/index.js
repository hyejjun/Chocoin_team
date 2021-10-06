import {createStore} from 'redux'
import reducer from '../reducers/index'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage
}

const enhanceReducer = persistReducer(persistConfig,reducer)

export default function configureStore(){
    const store = createStore(enhanceReducer)
    const persistor = persistStore(store)
    return(store,persistor)
}