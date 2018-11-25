import React from 'react';
import axios from 'axios';
import Films from '../components/Films';
import CustomForm from '../components/Form';
import {Col, Input, Row} from "antd";

const Search = Input.Search;


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
                <Row type="flex">
                    <Col span={4} order={4}><Search
                        placeholder="Enter a Price"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                    </Col>
                    <Col span={2} order={3}>Cena: </Col>
                    <Col span={4} order={2}><Search
                        placeholder="Enter a title"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                    </Col>
                    <Col span={2} order={1}>Tytuł: </Col>
                </Row>
                <h2>Create o movie </h2>
                <CustomForm
                    requestType="post"
                    filmID={null}
                    btnText="Create"/>
                <Films data={this.state.films}/>
                <br/>


            </div>
        );
    }
}

export default FilmList;
