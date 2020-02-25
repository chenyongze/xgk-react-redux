import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputVal: 'write something!',
    list: [
        '8点开晨会',
        '早9点需求沟通会Dmm',
        'ddd早9点需求沟通会',
    ]
};
export default (state = defaultState, action) => {

    console.log(state, action);
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState;
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state;
}