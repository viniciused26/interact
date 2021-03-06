import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import closebtn from '../../assets/closeButton.png'
import leavebtn from '../../assets/leaveButton.png'
import historicbtn from '../../assets/historicButton.png'
import timerbtn from '../../assets/timerButton.png'
import Modal from '../../components/Modal'
import { useHistory } from 'react-router-dom'
import api from '../../services/Api'

function Header(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpt, setModalOpt] = React.useState([]);

  const history = useHistory()

  function submitTimer(timer) {
    api.put(`/salas/${props.idSala}`, { tempo_mensagem: timer })
    openModal()
  }

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const setModalOption = (num) => {
    setModalOpt(modalOptions[num]);
  }

  const modalOptions = [
    {
      textTitle: "Deseja mesmo encerrar a sala?",
      firstBtnColor: "#379392",
      firstBtnText: "SIM",
      firstBtnFunc: props.navigateToHomepage,
      secndBtnColor: "#E94560",
      secndBtnText: "NÃO",
      secndBtnFunc: openModal,
    },
    {
      textTitle: "Deseja mesmo sair da sala?",
      firstBtnColor: "#379392",
      firstBtnText: "SIM",
      firstBtnFunc: props.navigateToHomepage,
      secndBtnColor: "#E94560",
      secndBtnText: "NÃO",
      secndBtnFunc: openModal,
    },
    {
      textTitle: "Histórico de Perguntas",
      text: props.text,
      height: props.height,
      background: props.background
    },
    {
      textTitle: "Cronometro das perguntas",
      text: props.time,
      isTimer: props.isTimer,
      closeModel: submitTimer
    }
  ];

  return (
    <S.Container>
      <Modal showModal={showModal} setShowModal={setShowModal} modalOptions={modalOpt} />
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>

      <S.Middle>
        <span> {props.roomName}</span>
      </S.Middle>

      <S.RightSide>
        {props.isTimer? 
          <button onClick={() => { openModal(); setModalOption(3) }}>
            <img src={timerbtn} alt="Abrir timer" /></button>
        : null}
        
        <button onClick={() => { openModal(); setModalOption(2) }} >
          <img src={historicbtn} alt="Abrir historico" />  </button>

        <button onClick={() => { openModal(); setModalOption(props.isModerator == false ? 1 : 0); }}>
          {props.isModerator == false ? <img src={leavebtn} alt="Fechar Sala" /> : <img src={closebtn} alt="Fechar Sala" />}
        </button>
      </S.RightSide>
    </S.Container>
  )
}

export default Header
