import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import closebtn from '../../assets/closeButton.png'
import leavebtn from '../../assets/leaveButton.png'
import Modal from '../../components/Modal'
import { useHistory } from 'react-router-dom'

function Header(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpt, setModalOpt] = React.useState([]);

  const history = useHistory()

  function navigateToHomepage() {
    history.push('/')
  }

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const setModalOption = (num) => {
    setModalOpt(modalOptions[num]);
  }

  const modalOptions = [
    {
      text: "Deseja mesmo encerrar a sala?",
      firstBtnColor: "#379392",
      firstBtnText: "SIM",
      firstBtnFunc: navigateToHomepage,
      secndBtnColor: "#E94560",
      secndBtnText: "NÃO",
      secndBtnFunc: openModal,
    },
    {
      text: "Deseja mesmo sair da sala?",
      firstBtnColor: "#379392",
      firstBtnText: "SIM",
      firstBtnFunc: navigateToHomepage,
      secndBtnColor: "#E94560",
      secndBtnText: "NÃO",
      secndBtnFunc: openModal,
    }
  ];

  return (
    <S.Container>
      <Modal showModal={showModal} setShowModal={setShowModal} modalOptions={modalOpt} />
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>

      <S.RightSide>
        <button onClick={() => { openModal(); setModalOption(props.isModerator == false ? 1 : 0); }}>
          {props.isModerator == false ? <img src={leavebtn} alt="Fechar Sala" /> : <img src={closebtn} alt="Fechar Sala" />}
        </button>
      </S.RightSide>
    </S.Container>

  )
}

export default Header
