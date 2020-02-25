import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import { getListAction } from './actionCreator'

// generator 函数
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    // console.log('j');
    // axios.get('http://b-coupon.dotalk.cn/leyou/api.t/redux_list').then((res) => {
    //     console.log(res);
    //     const action = getListAction(res);
    //     put(action);
    // })
    const res = yield axios.get('http://b-coupon.dotalk.cn/leyou/api.t/redux_list');
    const action = getListAction(res);
    yield put(action);

}



export default mySaga;