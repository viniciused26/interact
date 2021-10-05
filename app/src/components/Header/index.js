import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import closebtn from '../../assets/closeButton.png'
import Modal from '../../components/Modal'

function Header(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpt, setModalOpt] = React.useState([]);

  const modalOptions = [
    {
      text: "Deseja mesmo encerrar a sala?",
      textInput: false,
      firstBtn: "#379392",
      firstBtnText: "SIM",
      secndBtn: "#E94560",
      secndBtnText: "NÃO",
    }
  ];

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const setModalOption = (num) => {
    setModalOpt(modalOptions[num]);
  }
  
  return (
    <S.Container>
      <Modal showModal={showModal} setShowModal={setShowModal} modalOptions={modalOpt}/>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
        
      <S.RightSide>
        <button onClick={() => {openModal(); setModalOption(0);}}>
          <img src={closebtn} alt="Fechar Sala"/>
        </button>
      </S.RightSide>
    </S.Container> 
    
  )
}

export default Header
