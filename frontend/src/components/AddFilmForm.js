import React, {Component} from 'react';
import {Form, Input, Tooltip, Icon, Select, Checkbox, InputNumber, Button} from 'antd';
import axios from "axios";

const CheckboxGroup = Checkbox.Group;

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;


class AddFilmFormComponent extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            actors: [],
            languages: [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/categories/?format=json')
            .then(
                res => {
                    this.setState({
                        categories: res.data.map(
                            (category) => ({ label: category.name, value: category.id })
                        )
                    });
                }
            );

        axios.get('http://127.0.0.1:8000/actors/?format=json')
            .then(
                res => {
                    this.setState({
                        actors: res.data.map(
                            (actor) => ({
                                full_name: actor.first_name + " " + actor.last_name,
                                id: actor.id
                            })
                        )
                    });
                }
            );

        axios.get('http://127.0.0.1:8000/languages/?format=json')
            .then(
                res => {
                    this.setState({
                        languages: res.data.map(
                            language => ({
                                name: language.name,
                                id: language.id,
                            })
                        )
                    });
                }
            );
    }



    handleSubmit = (event) => {
        event.preventDefault();
        const value ={
            title: event.target.elements.title.value,
            info: event.target.elements.info.value,
            description: event.target.elements.description.value,
            language: event.target.elements.language.values,
            category : event.target.elements.categories.value,
            release_year : event.target.elements.release_year.value,
            subtitles : event.target.elements.subtitles.value,
            actors : event.target.elements.actors.value,
            length : event.target.elements.length.value,
            price : event.target.elements.price.value,
            photo_filename : event.target.elements.photo_filename.value,
        };
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`,
        };

        axios.post("http://127.0.0.1:8000/films/create/", value)
            .then(res => {
                if (res.status === 201) {
                    this.props.history.push(`/`);
                }
            })

};



    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Title&nbsp;
                            <Tooltip title="Title can't be longer than 32">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please enter film title!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Info&nbsp;
                            <Tooltip title="Info can't be longer than 256">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('info', {
                        rules: [{ required: true, message: 'Please enter film info!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Description&nbsp;
                            <Tooltip title="Description can't be longer than 2048">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please enter film description!', whitespace: true }],
                    })(
                        <TextArea rows={4} resize={null}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Categories
                        </span>
                    )}
                >
                    {getFieldDecorator('categories', {
                        rules: [{ required: true, message: 'Please select film categories!', }],
                    })(
                        <CheckboxGroup options={this.state.categories}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Release year
                        </span>
                    )}
                >
                    {getFieldDecorator('release_year', {
                        rules: [{ required: true, message: 'Please enter film year!' }],
                    })(
                        <InputNumber min={1950} max={2019} defaultValue={2000} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Language&nbsp;
                        </span>
                    )}
                >
                    {getFieldDecorator('language', {
                        rules: [{ required: true, message: 'Please enter film language!' }],
                    })(
                        <Select>
                            {this.state.languages.map(
                                language =>
                                    <Option value={language.id}>
                                        {language.name}
                                    </Option>)
                            }
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Subtitles
                        </span>
                    )}
                >
                    {getFieldDecorator('subtitles', {
                        rules: [{ required: true, message: 'Please select film subtitles!', }],
                    })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select subtitles"
                        >
                            {this.state.languages.map(
                                language =>
                                    <Option value={language.id}>
                                        {language.name}
                                    </Option>)
                            }
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Actors
                        </span>
                    )}
                >
                    {getFieldDecorator('actors', {
                        rules: [{ required: true, message: 'Please select film actors!', }],
                    })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select actors"
                        >
                            {this.state.actors.map(
                                actor =>
                                    <Option value={actor.id}>
                                        {actor.full_name}
                                    </Option>)
                            }
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Length
                        </span>
                    )}
                >
                    {getFieldDecorator('length', {
                        rules: [{ required: true, message: 'Please enter film length!' }],
                    })(
                        <InputNumber min={5} max={1440} defaultValue={90} />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Price
                        </span>
                    )}
                >
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: 'Please enter film price!' }],
                    })(
                        <InputNumber min={0.5} max={10} step={0.01} />)}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Photo filename&nbsp;
                            <Tooltip title="Info can't be longer than 16">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('photo_filename', {
                        rules: [{ required: true, message: 'Please enter film photo filename!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form>
        );
    }
}

const AddFilmForm = Form.create()(AddFilmFormComponent);

export default AddFilmForm;
