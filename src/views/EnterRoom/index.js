import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'

import SmallButton from '../../components/SmallButton'
import api from '../../services/Api'

function Homepage() {
  const history = useHistory()
  const [sala, setSala] = React.useState('');
  const [codigo, setCodigo] = React.useState('');
  const firstUpdate = React.useRef(true);

  React.useLayoutEffect(() => {
    if (firstUpdate.current) firstUpdate.current = false;
    else {
      api.post('/usuarios', {id_sala: sala})
      history.push(`/rooms/ask/${sala}`)
    }
    
  }, [sala])

  function handleChange(event){
    setCodigo(event.target.value)
  }

  function navigateToHomepage() {
    history.push('/')
  }

  return (
    <S.Container>
      <span> Digite o código para entrar em uma sala </span>
      <input type="text" onChange={handleChange} placeholder="XLR8" />
      <SmallButton onClick={() => setSala(codigo)} color={'#0F3460'} title={'ENTRAR'} />
      <br />
      <SmallButton onClick={navigateToHomepage} color={'#E94560'} title={'VOLTAR'} />
    </S.Container>
  )
}

export default Homepage
