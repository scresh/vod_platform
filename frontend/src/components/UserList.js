import axios from 'axios';
import React, {Component} from 'react';
import { Table, Button } from 'antd';

const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
}, {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
}, {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
}, {
    title: 'Date joined',
    dataIndex: 'date_joined',
    key: 'date_joined',
},{
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
},{
        title: '',
        dataIndex: 'delete',
        key: 'delete',
},
];


class UserList extends Component {
    state = {
        users: []
    };
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/users/?format=json')
            .then(
                res => {
                    this.setState({
                        users: res.data.map(
                            (user) => (
                                {
                                    id: user.id,
                                    username: user.user.username,
                                    email: user.user.email,
                                    date_joined: user.user.date_joined.slice(0, 19).replace("T", " "),
                                    balance: "$" + user.balance,
                                    delete: <Button type="danger" href="#">Delete</Button>
                                }
                            )
                        )
                    });
                }
            );

    }

    render() {
        return (
            <Table columns={columns} dataSource={this.state.users} />
        );
    }
}

export default UserList;
