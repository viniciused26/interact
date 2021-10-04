import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import closebtn from '../../assets/closeButton.png'

function Header(props) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
        
      <S.RightSide>
        <img src={closebtn} alt="Fechar Sala"/>
      </S.RightSide>
    </S.Container> 
    
  )
}

export default Header
