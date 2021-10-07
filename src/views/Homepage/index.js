import React from 'react'
import * as S from './styles'
import { useHistory, useParams } from 'react-router-dom'

import Button from '../../components/Button'
import api from '../../services/api'

function Homepage() {
  const history = useHistory()
  const [userId, setUserId] = React.useState()

  function navigateToNewRoom() {
    history.push('/rooms/enter')
  }

  function navigateToCreateRoom() {
    history.push(`/rooms/code`)
  }

  async function createUser(){
    await api.post(`/usuarios`, {})
    .then(response => {
      setUserId(response.data.id_usuario)
    })
  }

  async function createRoom(){
    await api.post(`/salas`, { id_moderador: userId })
  }

  React.useEffect(() => {
    createUser();
  }, []);
  
  return (
    <S.Container>
      <S.LeftSide>
        <Button onClick={createRoom} color={'#E94560'} title={'CRIAR'} />
        <span>
          Crie uma sala para seus espectadores <br /> interagirem com você!
        </span>
      </S.LeftSide>
      <S.RightSide>
        <Button onClick={navigateToNewRoom} color={'#0F3460'} title={'ENTRAR'} />
        <span>
          Entre em uma sala para interagir <br /> com um apresentador e seus
          espectadores!
        </span>
      </S.RightSide>
    </S.Container>
  )
}

export default Homepage
