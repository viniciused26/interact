import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './views/Homepage'
import EnterRoom from './views/EnterRoom'
import NewRoom from './views/NewRoom'
import AnsRoom from './views/AnsRoom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Homepage} />
    <Route path="/rooms/new" component={NewRoom} />
    <Route path="/rooms/enter" component={EnterRoom} />
    <Route path="/rooms/code" component={AnsRoom} />
  </BrowserRouter>,
  document.getElementById('root')
)
