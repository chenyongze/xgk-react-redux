import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, getMyList, GET_MY_LIST } from './actionTypes'
import axios from 'axios';

// change
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
// 添加
export const addItemAction = () => ({
    type: ADD_ITEM,
})
// 删除
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})


export const getTodoListAction = () => {
    return (dispatch) => {
        axios.get('http://b-coupon.dotalk.cn/leyou/api.t/redux_list').then((res) => {
            console.log(res);
            const action = getListAction(res);
            dispatch(action);
        })
    }

}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})

