import React, {Component} from 'react';
import { Drawer, Button } from 'antd';
import FilmForm from './FilmForm';


class RightDrawer extends Component {
    state = {
        visible: false,
        button_name: "",
    };

    componentDidMount() {
        if (this.props.filmID === null){
            this.setState({
                button_name: "Add film",
            });
        }else {
            this.setState({
                button_name: "Edit film",
            });
        }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div align="left">
                <Button type="primary" onClick={this.showDrawer}>
                    {this.state.button_name}
                </Button>
                <Drawer
                    title="Add new film"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={512}
                >
                    <FilmForm initialValues={this.props.initialValues} filmID={this.props.filmID}/>
                </Drawer>
            </div>
        );
    }
}

export default RightDrawer;
