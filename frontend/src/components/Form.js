import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;

class CustomForm extends React.Component {
    handleFormSubmit=(event, requestType, filmID)=>{
        event.preventDefault();
        const title =event.target.elements.title.value;
        const description= event.target.elements.description.value;

        switch ( requestType ){
            case 'post':
                return axios.post('http://127.0.0.1:8000/films/',{
                    title:title,
                    description:description
                })
                    .then(res =>console.log(res))
                    .catch(error =>console.err(error))
            case 'put':
                return axios.put(`http://127.0.0.1:8000/films/${filmID}/`,{
                    title:title,
                    description:description
                })
                    .then(res =>console.log(res))
                    .catch(error =>console.err(error))

        }
    }


    render() {
        return (
            <div>
                <Form onSubmit={(event)=> this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.filmID)}>
                    <FormItem label="Title">
                        <Input name="title" placeholder="Put a title" />
                    </FormItem>
                    <FormItem label="Description">
                        <Input name="description"placeholder="Put description" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default CustomForm;