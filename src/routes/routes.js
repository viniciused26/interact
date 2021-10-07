import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
  import React from 'react'
import Homepage from '../views/Homepage';
import EnterRoom from '../views/EnterRoom'
import AnsRoom from '../views/AnsRoom'
import AskRoom from '../views/AskRoom'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/rooms/enter" component={EnterRoom} />
            <Route path="/rooms/:code" component={AnsRoom} />
            <Route path="/rooms/ask/:code" component={AskRoom} />
        </Switch>
    </Router>
);

export default Routes;