import React from 'react';
import routes from 'Routes';
import HomePage from 'pages/HomePage/HomePage';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import { Route, Switch } from 'react-router-dom';

const Pages = () => {
    return (
        <>
            <Switch>
                <Route exact path={routes.home}>
                    {HomePage}
                </Route>
                <Route exact path={routes.category}>
                    {CategoryPage}
                </Route>
            </Switch>
        </>
    );
};

export default Pages;
