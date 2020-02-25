import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'
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

