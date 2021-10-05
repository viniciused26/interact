import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'

//componentes
import SmallButton from '../../components/SmallButton'

function Homepage() {
  const history = useHistory()

  function navigateToAnsRoom() {
    history.push('/')
  }

  return (
    <S.Container>
      <span> Digite o código para entrar em uma sala </span>
      <input type="text" placeholder="Código da sala" />
      <SmallButton
        onClick={navigateToAnsRoom}
        color={'#0F3460'}
        title={'ENTRAR'}
      />
    </S.Container>
  )
}

export default Homepage
