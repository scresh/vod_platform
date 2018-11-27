import React, {Component} from 'react';
import axios from 'axios';
import {Card, List, Avatar, Icon, Tag, Button} from 'antd';
import RightDrawer from "../components/RightDrawer";

const IconText = ({ type, text }) => (
    <span><Icon type={type} style={{ marginRight: 8 }} />{text}</span>
);

class FilmDetail extends Component {
    state = {
        film: {
            category: []
        },
        initialValues: {},
        filmID: this.props.match.params.filmID,
    };

    handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`http://127.0.0.1:8000/films/${this.state.filmID}/delete/`)
            .then(res => {
                if (res.status === 200) {
                }
            })
        ;


    };

    componentDidMount() {
        const filmID = this.props.match.params.filmID;
        axios.get(`http://127.0.0.1:8000/films/${filmID}/`)
            .then(
                res => {

                    this.setState({
                        film: res.data,
                        initialValues:{
                                title: res.data.title,
                                info: res.data.info,
                                description: res.data.description,
                                actor: res.data.actor.map(
                                    (actor_details) => (actor_details.id)
                                ),
                                release_year: res.data.release_year,
                                language: res.data.language.id,
                                subtitles: res.data.subtitles.map(
                                    (subtitles_details) => (subtitles_details.id)
                                ),
                                length: res.data.length,
                                price: res.data.price,
                                photo_url: res.data.photo_url,
                                category: res.data.category.map(
                                    (category_details) => (category_details.id)
                                ),

                            }
                        ,
                    });
                }
            ).catch(() => {
                window.location.replace('/');
        });
    }

    render() {
        return (
            <div align="center">
                <RightDrawer initialValues={this.state.initialValues} filmID={this.state.filmID}/>
                <Button type="danger" onClick={this.handleDelete}>Delete</Button>
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
                            { this.state.film.category.map(
                                (category) =>
                                    <Tag color="magenta" key={category.name.toLowerCase()}> { category.name } </Tag>
                            )}
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
                        renderItem={subtitles => (<List.Item>{subtitles.name}</List.Item>)}
                    />
                </Card>
            </div>
        );
    }
}

export default FilmDetail;
