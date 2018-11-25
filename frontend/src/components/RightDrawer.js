import React, {Component} from 'react';
import { Drawer, Button } from 'antd';
import AddFilmForm from './AddFilmForm';


class RightDrawer extends Component {
    state = { visible: false };

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
                    Add film
                </Button>
                <Drawer
                    title="Add new film"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={512}
                >
                    <AddFilmForm />
                </Drawer>
            </div>
        );
    }
}

export default RightDrawer;
