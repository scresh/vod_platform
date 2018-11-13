import React from 'react';
import axios from 'axios';
import Films from '../components/Films';
import CustomForm from '../components/Form';

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
            <div>
                <Films data={this.state.films}/>
                <br/>
                <h2>Create o movie </h2>
                <CustomForm
                    requestType="post"
                    filmID={null}
                    btnText="Create"/>
            </div>
        );
    }
}

export default FilmList;
