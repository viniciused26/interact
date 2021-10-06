import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'

import SmallButton from '../../components/SmallButton'

function Homepage() {
  const history = useHistory()

  function navigateToAnsRoom() {
    history.push('/rooms/ask')
  }
  function navigateToHomepage() {
    history.push('/')
  }

  return (
    <S.Container>
      <span> Digite o código para entrar em uma sala </span>
      <input type="text" placeholder="XLR8" />
      <SmallButton
        onClick={navigateToAnsRoom}
        color={'#0F3460'}
        title={'ENTRAR'} />
      <br />
      <SmallButton
        onClick={navigateToHomepage}
        color={'#E94560'}
        title={'VOLTAR'} />
    </S.Container>
  )
}

export default Homepage
