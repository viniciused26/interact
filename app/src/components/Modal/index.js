import React, {useRef, useEffect, useCallback} from 'react'
import * as S from './styles'
import { useSpring, animated } from 'react-spring'

import Button from '../../components/Button'
import closebtn from '../../assets/closeButton.png'

function Modal({showModal, setShowModal, modalOptions}) {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)` 
  })


  return (
    <div>
      {showModal ? (
        <S.Background>
          <animated.div style={animation}>
          <S.ModalWrapper showModal={showModal}>
            <S.Top>
            <button onClick={()=> setShowModal(prev=>!prev)}>
              <img src={closebtn} alt="Fechar Sala"/>
            </button>
            </S.Top>

            <S.Middle>
            <span>{modalOptions.text}</span>
            </S.Middle>

            <S.Bottom>
            <Button color={modalOptions.firstBtn} title={modalOptions.firstBtnText} />
            <Button color={modalOptions.secndBtn} title={modalOptions.firstBtnText} />
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
