import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import readButtonFalse from '../../assets/readButtonFalse.png'
import readButtonTrue from '../../assets/readButtonTrue.png'
import upvoteButtonFalse from '../../assets/upvoteButtonFalse.png'
import upvoteButtonTrue from '../../assets/upvoteButtonTrue.png'
import banButton from '../../assets/banButton.png'
import Modal from '../../components/Modal'
import api from '../../services/Api'
import io from 'socket.io-client'

const socket = io(api.defaults.baseURL)

function QuestionCard(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpt, setModalOpt] = React.useState([]);
  const [isClicked, setIsClicked] = React.useState(props.isVoted)
  const [idPergunta, setIdPergunta] = React.useState(props.id)
  const [pergunta, setPergunta] = React.useState()
  const [idUsuario, setidUsuario] = React.useState()
  const firstUpdate = React.useRef(true);

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      setidUsuario(localStorage.getItem('id_usuario'))
    }
    else {
      api.get(`/perguntas/${props.id}`, {}).then(response => setPergunta(response.data))
    }
  }, [isClicked])

  React.useEffect(() => {
    if (idPergunta) {
      api.get(`/perguntas/${props.id}`, {}).then(response => {
        setPergunta(response.data)
      })
    }
  }, [idPergunta])


    const handleClick = () => {
      if (props.isModerator) {
        socket.emit('ler.pergunta', {
          id_sala: pergunta.id_sala,
          id_pergunta: props.id
        })
      } else {
        socket.emit('concorda.pergunta', {
          id_usuario: idUsuario,
          id_sala: pergunta.id_sala,
          id_pergunta: props.id
        })
      }
    setIsClicked(!isClicked)
    }

  const openModal = () => {
    api.get(`/perguntas/${props.id}`, {}).then(response => setPergunta(response.data))
    setShowModal(prev => !prev);
  }

  const setModalOption = (num) => {
    setModalOpt(modalOptions[num]);
  }

  const banUser = () => {
    socket.emit('envia.banido', {
      id_sala: pergunta.id_sala,
      id_usuario: pergunta.id_usuario
    })
    openModal()
  }

  const modalOptions = [
    {
      text: "Tem certeza que gostaria de banir usuário : Tal",
      firstBtnColor: "#379392",
      firstBtnText: "Perdoar",
      firstBtnFunc: openModal,
      secndBtnColor: "#E94560",
      secndBtnText: "Banir",
      secndBtnFunc: banUser,
    },
  ];

  return (

    <S.Container>
      <Modal showModal={showModal} setShowModal={setShowModal} modalOptions={modalOpt} />

      <S.TopSide width={props.isSmall == false ? '950px' : '80%'} >

        <S.TopLeftSide>
          <span>{props.name}</span>
        </S.TopLeftSide>

        <S.TopRightSide>
            {props.isModerator == true ? (
              <button onClick={() => { openModal(); setModalOption(0); }}  >
                <img src={banButton} alt="Banir participante" />
              </button>
            ) : ""}

        </S.TopRightSide>
      </S.TopSide>

      <S.BottomSide width={props.isSmall == false ? '950px' : '80%'} >
        <S.BottomLeftSide>
          <span>{props.text}</span>
        </S.BottomLeftSide>

        <S.BottomRightSide>
          <button
            onClick={handleClick} >
            {props.isModerator == false ? (
              <img
                src={isClicked ? upvoteButtonTrue : upvoteButtonFalse}
                alt="Concordar"
              />
            ) : (
              <img
                src={readButtonFalse}
                alt="Marcar como lida"
              />
            )}
          </button>
          <span>{props.upvotes}</span>
        </S.BottomRightSide>

      </S.BottomSide>

    </S.Container >
  )
}

export default QuestionCard
