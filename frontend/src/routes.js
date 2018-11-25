import React from 'react';
import { Route } from 'react-router-dom';
import FilmList from './components/FilmList';
// import FilmDetail from "./containers/FilmDetailView";
// import Login from './containers/Login';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ FilmList} />
        {/*<Route exact path='/films/:filmID' component={ FilmDetail } />*/}
        {/*<Route exact path='/login' component={Login}/>*/}

    </div>
);


export default BaseRouter;
