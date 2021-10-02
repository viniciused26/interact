import React from 'react'
import * as S from './styles'

//componentes
import Button2 from '../../components/Button2'

function Homepage() {
  return (
    <S.Container>
      <S.Center>
        <span>
          Crie uma nova sala <br />
        </span>
        <input type="text" placeholder="Digite o código da sala" />
        <input type="text" placeholder="Nome da sala" />
      </S.Center>
      <Button2 color={'#0F3460'} title={'CRIAR SALA'} />
    </S.Container>
  )
}

export default Homepage
