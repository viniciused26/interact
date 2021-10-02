import React from 'react'
import * as S from './styles'

//componentes
import Button2 from '../../components/Button2'

function Homepage() {
  return (
    <S.Container>
      <S.Center>
        <span>
          Entrar em uma sala
          <br />
        </span>
        <input type="text" placeholder="Como você deseja ser chamado?" />
        <input type="text" placeholder="Código da sala" />
      </S.Center>
      <Button2 color={'#0F3460'} title={'ENTRAR NA SALA'} />
    </S.Container>
  )
}

export default Homepage
