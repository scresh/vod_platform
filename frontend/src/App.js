import './App.css';
import 'antd/dist/antd.css';
import BaseRouter from './routes';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;


const AppLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Films</Menu.Item>
                    <Menu.Item key="2">Actors</Menu.Item>
                    <Menu.Item key="3">Categories</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                    {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <AppLayout>
                <BaseRouter />
              </AppLayout>
          </Router>
      </div>
    );
  }
}

export default App;
