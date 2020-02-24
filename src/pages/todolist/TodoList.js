import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd/dist/antd';
import { List } from 'antd';
import './index.css';

const data = [
    '8点开晨会',
    '早9点需求沟通会',
    'ddd早9点需求沟通会',
];

class TodoList extends Component {

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <Input placeholder="write Something" style={{
                    width: '250px',
                    marginRight: '10px',
                }} />
                <Button type='primary' >增加</Button>

                <div className="list-b">
                    <List bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)} >

                    </List>
                </div>
            </div>
        );
    }
}

export default TodoList;