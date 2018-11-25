import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from '../components/Form';

class FilmDetail extends React.Component {
    state = {
        film: {}
    };
    filmID;

    componentDidMount() {
        console.log("HEJKA!");
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
            <div>
                <Card

                    title={this.state.film.title}
                    cover={<img  width={272} alt={this.state.film.title} src={"../films/" + this.state.film.id + ".jpg"} />}
                >
                    <p>{this.state.film.description}</p>
                    <CustomForm
                        requestType="put"
                        filmID={this.props.match.params.filmID}
                        btnText="Update"/>
                </Card>
            </div>
        );
    }
}

export default FilmDetail;
