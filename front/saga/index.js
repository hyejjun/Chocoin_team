import {all,fork} from 'redux-saga/effects'
import exchangeSaga from './exchangeSaga'

export default function* rootSaga(){
    yield all([
        fork(exchangeSaga)
    ])
}