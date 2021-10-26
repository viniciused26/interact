import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'

function Homepage() {
  const history = useHistory()

  function navigateToCreateRoom() {
    history.push('/rooms/Create')
  }

  function navigateToJoinRoom() {
    history.push('/rooms/enter')
  }

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
