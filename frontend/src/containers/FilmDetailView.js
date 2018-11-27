import React, {Component} from 'react';
import axios from 'axios';
import {Card, List, Avatar, Icon, Tag} from 'antd';

const IconText = ({ type, text }) => (
    <span><Icon type={type} style={{ marginRight: 8 }} />{text}</span>
);

class FilmDetail extends Component {
    state = {
        film: {}
    };

    componentDidMount() {
        const filmID = this.props.match.params.filmID;
        axios.get(`http://127.0.0.1:8000/films/${filmID}/`)
            .then(
                res => {
                    this.setState({
                        film: res.data
                    });
                }
            );
    }

    render() {
        return (
            <div align="center">
                <Card
                    style={{ width: 800 }}
                    title={this.state.film.title}
                    cover={<img alt={this.state.film.title} src={this.state.film.photo_url} />}

                >

                    <List.Item
                        key={this.state.film.title}
                        actions={[
                            <IconText type="clock-circle" text={ this.state.film.length + ' min' } />,
                            <IconText type="dollar" text={ this.state.film.price + " PLN"} />,
                            <IconText type="calendar" text={ this.state.film.release_year } />,
                        ]}
                    >
                        <div>
                            <Tag color="magenta" > { this.state.film.category } </Tag>
                        </div>
                    </List.Item>
                    <p>{this.state.film.description}</p>
                    <List
                        itemLayout="vertical"
                        dataSource={this.state.film.actor}
                        renderItem={actor => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={actor.photo_url} />}
                                    title={<a href="https://ant.design">{actor.last_name +" " + actor.first_name}</a>}

                                />
                            </List.Item>
                        )}
                    />
                    <h3 style={{ marginBottom: 16 }}>Subtitles</h3>
                    <List
                        bordered
                        dataSource={this.state.film.subtitles}
                        renderItem={subtitles => (<List.Item>{subtitles}</List.Item>)}
                    />
                </Card>
            </div>
        );
    }
}

export default FilmDetail;
