import React, { useRef, useEffect, useCallback } from 'react'
import * as S from './styles'
import { useSpring, animated } from 'react-spring'

import Button from '../../components/Button'
import closebtn from '../../assets/closeButton.png'

function Modal(props) {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showModal ? 1 : 0,
    transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  return (
    <div>
      {props.showModal ? (
        <S.Background>
          <animated.div style={animation}>
            <S.ModalWrapper showModal={props.showModal}>

              <S.Top>
                <span>{props.modalOptions.textTitle}</span>

                <button onClick={() => props.setShowModal(prev => !prev)}>
                  <img src={closebtn} alt="Fechar Sala" />
                </button>
              </S.Top>

              <S.Middle height={props.modalOptions.height}>
                <span>{props.modalOptions.text}</span>
              </S.Middle>

              <S.Bottom>
                <Button color={props.modalOptions.firstBtnColor} title={props.modalOptions.firstBtnText} onClick={props.modalOptions.firstBtnFunc} />
                <Button color={props.modalOptions.secndBtnColor} title={props.modalOptions.secndBtnText} onClick={props.modalOptions.secndBtnFunc} />
              </S.Bottom>

            </S.ModalWrapper>
          </animated.div>
        </S.Background>
      ) : null
      }
    </div>

  )
}

export default Modal
