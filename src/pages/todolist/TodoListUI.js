import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button } from 'antd/dist/antd';
import { List } from 'antd';
import './index.css';

export default class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <Input
                    placeholder={this.props.inputValue}
                    style={{
                        width: '250px',
                        marginRight: '10px',
                    }}
                    onChange={this.props.changInputValue}
                    value={this.props.inputValue}
                />
                <Button
                    type='primary'
                    onClick={this.props.clickBtn}
                >增加</Button>

                <div className="list-b">
                    <List bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={() => {
                            this.props.deletedItem(index)
                        }}>{item}</List.Item>)} >

                    </List>
                </div>
            </div>
        )
    }
}
