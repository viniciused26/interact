import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './views/Homepage'
import EnterRoom from './views/EnterRoom'
import AnsRoom from './views/AnsRoom'
import AskRoom from './views/AskRoom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Homepage} />
    <Route path="/rooms/enter" component={EnterRoom} />
    <Route path="/rooms/:id_sala" component={AnsRoom} />
    <Route path="/rooms/ask" component={AskRoom} />
  </BrowserRouter>,
  document.getElementById('root')
)
