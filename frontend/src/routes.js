import React from 'react';
import { Route } from 'react-router-dom';
import FilmList from './components/FilmList';
import FilmDetail from "./containers/FilmDetailView";
import UserList from "./components/UserList";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ FilmList} />
        <Route exact path='/:filmID' component={ FilmDetail } />
        <Route exact path='/users' component={ UserList } />

        {/*<Route exact path='/login' component={Login}/>*/}

    </div>
);


export default BaseRouter;
