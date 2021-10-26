import React from 'react'
import * as S from './styles'

function Button(props) {
  return (
    <S.Container color={props.color} width={props.width} height={props.height} margin={props.margin}>
      <button className="button" {...props}>
        <span>{props.title}</span>
      </button>
    </S.Container>
  )
}

export default Button
