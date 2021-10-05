import React, {useRef, useEffect, useCallback} from 'react'
import * as S from './styles'
import { useSpring, animated } from 'react-spring'


function Modal({showModal, setShowModal}) {
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
            <span>yay</span>
            <button onClick={()=> setShowModal(prev=>!prev)}/>
          </S.ModalWrapper>
          </animated.div>
        </S.Background>
      ) : null
      }
    </div>
    
  )
}

export default Modal
