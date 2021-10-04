import {all,fork} from 'redux-saga/effects'
import exchangeSaga from './exchangeSaga'
import tradingrecordSage from './tradingrecordSaga'
export default function* rootSaga(){
    yield all([
        fork(exchangeSaga),
        fork(tradingrecordSage)
    ])
}