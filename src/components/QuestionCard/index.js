import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import readButtonFalse from '../../assets/readButtonFalse.png'
import readButtonTrue from '../../assets/readButtonTrue.png'
import upvoteButtonFalse from '../../assets/upvoteButtonFalse.png'
import upvoteButtonTrue from '../../assets/upvoteButtonTrue.png'

function QuestionCard(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <S.Container width={props.isSmall == false ? "950px" : "750px"}>
      <S.LeftSide>
        <span>{props.text}</span>
      </S.LeftSide>
        
      <S.RightSide>
        <button onClick={() => isClicked == false ? setIsClicked(true) : setIsClicked(false)}>
          {props.isModerator == false ? 
            <img src={isClicked == false ? upvoteButtonFalse : upvoteButtonTrue} alt="Fechar Sala"/>  :
            <img src={isClicked == false ? readButtonFalse : readButtonTrue} alt="Fechar Sala"/>
          }
        </button>
        <span>{props.upvotes}</span>
      </S.RightSide>
    </S.Container> 
    
  )
}

export default QuestionCard
