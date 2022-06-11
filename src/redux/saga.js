import { takeEvery, call, put } from 'redux-saga/effects'
import { showLoader, hideLoader, showAlert } from './actions'
import { FETCH_POST, REQUEST_POST } from './types'

export function* sagaWatcher() {
   yield takeEvery(REQUEST_POST, sagaWorker)
}

function* sagaWorker() {
    try{
        yield put(showLoader())
        const payload = yield call(fetching);
        yield put({ type: FETCH_POST, payload });
        yield put(hideLoader());
    }
    catch (e){
        yield put(showAlert('Something go wrong'));
        yield put(hideLoader());
    }
}

async function fetching() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    return await result.json();
}