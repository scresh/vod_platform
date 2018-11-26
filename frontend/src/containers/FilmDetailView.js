import React from 'react';
import axios from 'axios';
import { Card , List, Avatar} from 'antd';


class FilmDetail extends React.Component {
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
                </Card>
            </div>
        );
    }
}

export default FilmDetail;
