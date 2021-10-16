import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'

import SmallButton from '../../components/SmallButton'
import api from '../../services/Api'

function EnterRoom() {
  const history = useHistory()
  const [sala, setSala] = React.useState('');
  const [codigo, setCodigo] = React.useState('');
  const firstUpdate = React.useRef(true);

  React.useLayoutEffect(() => {
    if (firstUpdate.current) firstUpdate.current = false;
    else {
      if (localStorage.getItem('id_usuario'))
        api.put(`/usuarios/${localStorage.getItem('id_usuario')}`, { id_sala: sala })
      else
        api.post('/usuarios', { id_sala: sala }).then(response => localStorage.setItem('id_usuario', response.data.id_usuario))
      history.push(`/rooms/ask/${sala}`)
    }
  }, [sala])

  function handleChange(event) {
    setCodigo(event.target.value)
  }

  function navigateToHomepage() {
    history.push('/')
  }

  return (
    <S.Container>
      <span> Entre em uma  sala </span>
      <input type="text" placeholder="Digite o seu nome de usuário" />
      <input type="text" onChange={handleChange} placeholder="Digite o código da sala" />
      <SmallButton onClick={() => setSala(codigo)} color={'#0F3460'} title={'ENTRAR'} />
      <br />
      <SmallButton onClick={navigateToHomepage} color={'#E94560'} title={'VOLTAR'} />
    </S.Container>
  )
}

export default EnterRoom
