import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './views/Homepage'
import EnterRoom from './views/EnterRoom'
import NewRoom from './views/NewRoom'
import AnsRoom from './views/AnsRoom'

ReactDOM.render(
  <React.StrictMode>
    <AnsRoom />
  </React.StrictMode>,
  document.getElementById('root')
)
