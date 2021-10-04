import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import readButtonFalse from '../../assets/readButtonFalse.png'
import readButtonTrue from '../../assets/readButtonTrue.png'
import upvoteButtonFalse from '../../assets/upvoteButtonFalse.png'
import upvoteButtonTrue from '../../assets/upvoteButtonTrue.png'

function QuestionCard(props) {
  return (
    <S.Container>
      <S.LeftSide>
        <span>{props.text}</span>
      </S.LeftSide>
        
      <S.RightSide>
        {props.isModerator == false ? 
          <img src={props.isClicked == false ? upvoteButtonFalse : upvoteButtonTrue} alt="Fechar Sala"/> : 
          <img src={props.isClicked == false ? readButtonFalse : readButtonTrue} alt="Fechar Sala"/>
        }
        <span>{props.upvotes}</span>
      </S.RightSide>
    </S.Container> 
    
  )
}

export default QuestionCard
