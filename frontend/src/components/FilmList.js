import axios from 'axios';
import React, {Component} from 'react';
import { List, Avatar, Icon, Tooltip, Tag} from 'antd';
import RightDrawer from './RightDrawer'

const IconText = ({ type, text }) => (
    <span><Icon type={type} style={{ marginRight: 8 }} />{text}</span>
);

class FilmList extends Component {
    state = {};

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/films/?format=json')
            .then(
                res => {
                    this.setState({
                        films: res.data
                    });
                }
            );

    }

    render() {
        return (
            <div className="FilmList">
                <List
                    header={<RightDrawer />}
                    grid={{ gutter: 32, column: 2 }}
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        pageSize: 10,
                    }}
                    dataSource={this.state.films}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="clock-circle" text={ item.length + ' min' } />,
                                <IconText type="dollar" text={ item.price + " PLN"} />,
                                <IconText type="calendar" text={ item.release_year } />,
                            ]}
                            extra={
                                <img width={272} alt="logo" src={item.photo_url} />
                            }
                        >
                            <List.Item.Meta
                                avatar={
                                    <Tooltip title={ item.language.name }>
                                        <Avatar src={item.language.icon_url } />
                                    </Tooltip>
                                }
                                title={<a href={`/${item.id}/`}>{item.title}</a>}
                                description={item.info}
                            />
                            <div>
                                { item.category.map(
                                    (category) =>
                                        <Tag color="magenta" key={category.toLowerCase()}> { category } </Tag>
                                )}
                            </div>
                        </List.Item>
                    )}

                />
            </div>
        );
    }
}

export default FilmList;
