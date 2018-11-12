import React from 'react';
import { Route } from 'react-router-dom';
import FilmList from './containers/FilmListView';
import FilmDetail from "./containers/FilmDetailView";


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ FilmList } />
        <Route exact path='/:filmID' component={ FilmDetail } />

    </div>
);


export default BaseRouter;
