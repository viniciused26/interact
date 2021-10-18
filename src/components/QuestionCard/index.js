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

function QuestionCard(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpt, setModalOpt] = React.useState([]);
  const [isClicked, setIsClicked] = React.useState(props.is_respondida)
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
    if (firstUpdate.current || !pergunta) firstUpdate.current = false;
    else {
      if (props.isModerator) {
        api.put(`/perguntas/${props.id}`, {
          conteudo: pergunta.conteudo,
          id_sala: pergunta.id_sala,
          id_usuario: pergunta.id_usuario,
          is_respondida: isClicked
        }
        ).then(res => console.log(res))
      } else {
        api.post(`/perguntas/concordar/${props.id}`, { id_usuario: idUsuario }).then(res => console.log(res))
      }
    }
  }, [pergunta])

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const setModalOption = (num) => {
    setModalOpt(modalOptions[num]);
  }

  const banUser = () => {
    ///Adicionar funcao que apaga o usuário do back aqui
  }

  const modalOptions = [
    {
      text: "Tem certeza que gostaria de banir usuário : Tal",
      firstBtnColor: "#379392",
      firstBtnText: "Copiar código da sala",
      firstBtnFunc: banUser,
      secndBtnColor: "#E94560",
      secndBtnText: "Copiar link da sala",
      secndBtnFunc: openModal,
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
          <button onClick={() => { openModal(); setModalOption(0); }}  >
            {props.isModerator == true ? (
              <img src={banButton} alt="Banir participante" />
            ) : ""}
          </button>

        </S.TopRightSide>
      </S.TopSide>

      <S.BottomSide width={props.isSmall == false ? '950px' : '80%'} >
        <S.BottomLeftSide>
          <span>{props.text}</span>
        </S.BottomLeftSide>

        <S.BottomRightSide>
          <button
            onClick={() => isClicked ?
              setIsClicked(false) : setIsClicked(true)} >
            {props.isModerator == false ? (
              <img
                src={isClicked ? upvoteButtonTrue : upvoteButtonFalse}
                alt="Fechar Sala"
              />
            ) : (
              <img
                src={isClicked ? readButtonTrue : readButtonFalse}
                alt="Fechar Sala"
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
