import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/routes'
import io from 'socket.io-client'
import api from './services/Api'

const socket = io(api.defaults.baseURL)
socket.on('connect', () => { console.log('Conectado!!') })

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)
