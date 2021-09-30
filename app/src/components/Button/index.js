import React from 'react';
import * as S from './styles';

function Button(props){
    return(
        <S.Container color={props.color}>
            <span>{props.title}</span>
        </S.Container>
    );
}

export default Button;