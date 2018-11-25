import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const FormItem = Form.Item;


class CustomForm extends React.Component {

    handleFormSubmit = async (event, requestType, filmID) => {
        event.preventDefault();

        const postObj = {
            title: event.target.elements.title.value,
            content: event.target.elements.content.value
        }

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`,
        };

        if (requestType === "post") {
            await axios.post("http://127.0.0.1:8000/films/", postObj)
                .then(res => {
                    if (res.status === 201) {
                        this.props.history.push(`/`);
                    }
                })
        } else if (requestType === "put") {
            await axios.put(`http://127.0.0.1:8000/api/${filmID}/films/${filmID}`, postObj)
                .then(res => {
                    if (res.status === 200) {
                        this.props.history.push(`/`);
                    }
                })
        }
    };
    btnText;
    requestType;

    render() {
        return (
            <div>
                <Form
                    onSubmit={event =>
                        this.handleFormSubmit(
                            event,
                            this.props.requestType,
                            this.props.filmID
                        )
                    }
                >
                    <FormItem label="Title">
                        <Input name="title" placeholder="Put a title here" />
                    </FormItem>
                    <FormItem label="Content">
                        <Input name="content" placeholder="Enter some content ..." />
                    </FormItem>
                    <FormItem label="Name">
                        <Input name="name" placeholder="Enter a name (language) ..." />
                    </FormItem>

                    <FormItem label="IconName">
                        <Input name="icon_name" placeholder="Enter a icon name (language) ..." />
                    </FormItem>

                    <FormItem label="Length">
                        <Input name="length" placeholder="Enter a length ..." />
                    </FormItem>

                    <FormItem label="Price">
                        <Input name="price" placeholder="Enter a price ..." />
                    </FormItem>
                        <Button type="primary" htmlType="submit">
                            {this.props.btnText}
                        </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(CustomForm);