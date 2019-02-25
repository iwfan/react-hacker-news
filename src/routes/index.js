import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../views/Home';


const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ Home }/>
      <Route render={() => <h1>No Match </h1>}/>
    </Switch>
  </Router>
);

export default Routes;