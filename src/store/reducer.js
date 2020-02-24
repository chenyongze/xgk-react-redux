
const defaultState = {
    inputVal: 'write something!',
    list: [
        '8点开晨会',
        '早9点需求沟通会D',
        'ddd早9点需求沟通会',
    ]
};
export default (state = defaultState, action) => {

    console.log(state, action);
    if (action.type === 'changInput') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState;
    }

    if (action.type === "addItem") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState;
    }
    return state;
}