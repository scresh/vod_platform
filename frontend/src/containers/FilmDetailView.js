import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

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
            <Card
                title={this.state.film.title}
                cover={<img  width={272} alt={this.state.film.title} src={"../films/" + this.state.film.id + ".jpg"} />}
            >
                <p>{this.state.film.description}</p>

            </Card>
        );
    }
}

export default FilmDetail;
