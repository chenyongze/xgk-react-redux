import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd/dist/antd';
import { List } from 'antd';
import './index.css';
import store from '../../store'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState();
        this.changInputValue = this.changInputValue.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <Input placeholder={this.state.inputVal}
                    style={{
                        width: '250px',
                        marginRight: '10px',
                    }}
                    onChange={this.changInputValue}
                />
                <Button
                    type='primary'
                    onClick={this.clickBtn}
                >增加</Button>

                <div className="list-b">
                    <List bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.deletedItem.bind(this, index)}>{item}</List.Item>)} >

                    </List>
                </div>
            </div>
        );
    }

    changInputValue(e) {
        // console.log(e.target.value)
        const action = {
            type: 'changInput',
            value: e.target.value

        }
        store.dispatch(action);
    }

    storeChange() {
        this.setState(store.getState())
    }

    clickBtn() {
        // console.log('clickBtn');
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);

    }
    deletedItem(index) {
        console.log(index);
    }

}

export default TodoList;