import React, { Component } from 'react';
import store from '../../store'
import { changeInputAction, addItemAction, deleteItemAction } from '../../store/actionCreator'
import TodoListUI from './TodoListUI';

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState();
        this.changInputValue = this.changInputValue.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deletedItem = this.deletedItem.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputVal}
                changInputValue={this.changInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deletedItem={this.deletedItem}
            />
        );
    }

    changInputValue(e) {
        // console.log(e.target.value)
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    storeChange() {
        this.setState(store.getState())
    }

    clickBtn() {
        // console.log('clickBtn');
        const action = addItemAction();
        store.dispatch(action);

    }
    // 删除 
    deletedItem(index) {
        // console.log(index);
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;