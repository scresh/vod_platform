import React from 'react';
import axios from 'axios';
import Films from '../components/Films';


class FilmList extends React.Component {
    state = {
        films: []
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/films/')
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
            <Films data={this.state.films}/>
        );
    }
}

export default FilmList;
