import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewIncident from './pages/NewIncident';
import NotFound from './pages/NotFound';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" exact component={Register} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/incidents/new" exact component={NewIncident} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}