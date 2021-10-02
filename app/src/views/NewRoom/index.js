import React from 'react'
import * as S from './styles'

//componentes
import SmallButton from '../../components/SmallButton'

function Homepage() {
  return (
    <S.Container>
        <span>
          Crie uma nova sala e convide participantes<br />
        </span>
      <SmallButton color={'#E94560'} title={'CRIAR'} />
    </S.Container>
  )
}

export default Homepage
