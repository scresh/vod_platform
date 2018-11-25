import React from 'react';
import { Route } from 'react-router-dom';
import FilmList from "./components/FilmList";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ FilmList} />
    </div>
);


export default BaseRouter;
