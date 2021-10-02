import React from 'react'
import * as S from './styles'

//componentes
import SmallButton from '../../components/SmallButton'

function Homepage() {
  return (
    <S.Container>
      <span> Digite o código para entrar em uma sala </span>
      <input type="text" placeholder="Código da sala"/>
      <SmallButton color={'#0F3460'} title={'ENTRAR'} />
    </S.Container>
  )
}

export default Homepage
