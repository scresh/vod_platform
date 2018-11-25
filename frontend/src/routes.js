import React from 'react';
import { Route } from 'react-router-dom';
import FilmList from './containers/FilmListView';
import FilmDetail from "./containers/FilmDetailView";
import Login from './containers/Login';
import UserList from './containers/UsersListView';

const BaseRouter = () => (
    <div>
        <Route exact path='/adminFilmList' component={ FilmList } />
        <Route exact path='/films/:filmID/' component={ FilmDetail } />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' component={ UserList }/>

    </div>
);


export default BaseRouter;
