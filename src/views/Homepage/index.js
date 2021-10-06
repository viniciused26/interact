import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'

function Homepage() {
  const history = useHistory()

  function navigateToNewRoom() {
    history.push('/rooms/enter')
  }

  function navigateToCreatRoom() {
    history.push('/rooms/code')
  }

  return (
    <S.Container>
      <S.LeftSide>
        <Button onClick={navigateToCreatRoom} color={'#E94560'} title={'CRIAR'} />
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
