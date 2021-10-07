import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import api from '../../services/Api';

function Homepage() {
  const history = useHistory()
  const [sala, setSala] = React.useState();
  const firstUpdate = React.useRef(true);


  React.useLayoutEffect(() => {
    if (firstUpdate.current) firstUpdate.current = false;
    else history.push(`/rooms/${sala}`)
    
  }, [sala])

  function navigateToJoinRoom() {
    history.push('/rooms/enter')
  }
  

  const navigateToCreateRoom = React.useCallback(() => {
    if(localStorage.getItem('id_usuario'))
      api.post('/salas', {id_moderador: localStorage.getItem('id_usuario')}).then(response => setSala(response.data.id_sala))
    else
      api.post('/usuarios', {}).then(response => {
        localStorage.setItem('id_usuario', response.data.id_usuario)
        api.post('/salas', {id_moderador: response.data.id_usuario}).then(response => setSala(response.data.id_sala))
      })
    
  })

  return (
    <S.Container>
      <S.LeftSide>
        <Button onClick={navigateToCreateRoom} color={'#E94560'} title={'CRIAR'} />
        <span>
          Crie uma sala para seus espectadores <br /> interagirem com você!
        </span>
      </S.LeftSide>
      <S.RightSide>
        <Button onClick={navigateToJoinRoom} color={'#0F3460'} title={'ENTRAR'} />
        <span>
          Entre em uma sala para interagir <br /> com um apresentador e seus
          espectadores!
        </span>
      </S.RightSide>
    </S.Container>
  )
}

export default Homepage
