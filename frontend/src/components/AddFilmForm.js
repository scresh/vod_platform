import React, {Component} from 'react';
import {Form, Input, Tooltip, Icon, Select, Checkbox} from 'antd';
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
    }



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
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
                    {getFieldDecorator('category', {
                        rules: [{ required: true, message: 'Please select film categories!', }],
                    })(
                        <CheckboxGroup options={this.state.categories}/>
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
                    {getFieldDecorator('category', {
                        rules: [{ required: true, message: 'Please select film actors!', }],
                    })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select actors"
                        >
                            {this.state.actors.map(
                                actor =>
                                    <Option key={actor.id}>
                                        {actor.full_name}
                                    </Option>)
                            }
                        </Select>
                    )}
                </FormItem>

            </Form>
        );
    }
}

const AddFilmForm = Form.create()(AddFilmFormComponent);

export default AddFilmForm;
