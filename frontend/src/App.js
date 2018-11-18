import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { connect } from 'react-redux';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout'
import * as actions from './store/actions/auth';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <CustomLayout {...this.props}>
                  <BaseRouter />
              </CustomLayout>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);