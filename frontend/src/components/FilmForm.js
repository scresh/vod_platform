import React, {Component} from 'react';
import {Form, Input, Tooltip, Icon, Select, Checkbox, InputNumber, Button} from 'antd';
import axios from "axios";

const CheckboxGroup = Checkbox.Group;

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;


class AddFilmFormComponent extends Component {
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
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.props.filmID === null) {
                    axios.post("http://127.0.0.1:8000/films/create/", values)
                        .then(res => {
                            if (res.status === 201) {
                            }
                        })
                } else {
                    axios.put(`http://127.0.0.1:8000/films/${this.props.filmID}/update/`, values)
                        .then(res => {
                            if (res.status === 200) {
                            }
                        })
                }
                window.location.reload();
            }
        });


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
                    {
                        getFieldDecorator(
                            'title', {
                                rules: [{ required: true, message: 'Please enter film title!', whitespace: true }],
                                initialValue: this.props.initialValues.title,
                                key: "title",
                            },

                            )(
                                <Input />
                        )
                    }
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
                    {
                        getFieldDecorator(
                            'info', {
                                rules: [{ required: true, message: 'Please enter film info!', whitespace: true }],
                                initialValue: this.props.initialValues.info,
                                key: 'info',
                            }

                            )(
                                <Input />
                        )
                    }
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
                    {
                        getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please enter film description!', whitespace: true }],
                            initialValue: this.props.initialValues.description,
                            key: 'description',
                        })(
                        <TextArea rows={4}/>
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
                    {
                        getFieldDecorator('category', {
                            rules: [{ required: true, message: 'Please select film categories!'}],
                            initialValue: this.props.initialValues.category,
                            key: 'category',

                        })(
                        <CheckboxGroup options={this.state.categories} />
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
                        initialValue: this.props.initialValues.release_year,
                        key: 'release_year',

                    })(
                        <InputNumber min={1950} max={2019} />
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
                        initialValue: this.props.initialValues.language,
                        key: 'language',

                    })(
                        <Select >
                            {this.state.languages.map(
                                language =>
                                    <Option value={language.id} >{language.name}</Option>)
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
                        initialValue: this.props.initialValues.subtitles,
                        key: 'subtitles',
                    })(
                        <Select
                            mode="multiple"
                            placeholder="Please select subtitles"

                        >
                            {this.state.languages.map(
                                language =>
                                    <Option value={language.id}>{language.name}</Option>)
                            }
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Actors&nbsp;
                        </span>
                    )}
                >
                    {getFieldDecorator('actor', {
                        rules: [{ required: true, message: 'Please select film actor!' }],
                        initialValue: this.props.initialValues.actor,
                        key: 'actor',


                    })(
                        <Select
                            mode="multiple"
                            placeholder="Please select actors"

                        >
                            {this.state.actors.map(
                                actor =>
                                    <Option value={actor.id}>{actor.full_name}</Option>)
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
                        initialValue: this.props.initialValues.length,
                        key: 'length',

                    })(
                        <InputNumber min={5} max={1440} />
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
                        initialValue: this.props.initialValues.price,
                        key: 'price',

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
                    {getFieldDecorator('photo_url', {
                        rules: [{ required: true, message: 'Please enter film photo filename!', whitespace: true }],
                        initialValue: this.props.initialValues.photo_url,
                        key: 'photo_url',

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

const FilmForm = Form.create()(AddFilmFormComponent);

export default FilmForm;
