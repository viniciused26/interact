import React from 'react'
import * as S from './styles'

function SmallButton(props) {
  return (
    <S.Container color={props.color}>
      <button className="button" {...props}>
        <span>{props.title}</span>
      </button>
    </S.Container>
  )
}

export default SmallButton
