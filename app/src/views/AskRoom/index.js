import React from 'react'

import * as S from './styles'

import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import SmallButton from '../../components/SmallButton'
import Modal from '../../components/Modal'

function AskRoom() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpt, setModalOpt] = React.useState([]);

  const testFunction = () => {
    console.log("insira aqui a função do botão");
  }

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const setModalOption = (num) => {
    setModalOpt(modalOptions[num]);
  }

  const modalOptions = [
    {
      text: "Deseja mesmo limpar estas perguntas?",
      firstBtnColor: "#379392",
      firstBtnText: "SIM",
      firstBtnFunc: testFunction,
      secndBtnColor: "#E94560",
      secndBtnText: "NÃO",
      secndBtnFunc: testFunction,
    },
    {
      text: "XLR8",
      firstBtnColor: "#379392",
      firstBtnText: "COPIAR CÓDIGO",
      firstBtnFunc: testFunction,
      secndBtnColor: "#379392",
      secndBtnText: "COPIAR LINK",
      secndBtnFunc: testFunction,
    },
    {
      text: "Deseja mesmo encerrar a sala?",
      firstBtnColor: "#379392",
      firstBtnText: "SIM",
      firstBtnFunc: testFunction,
      secndBtnColor: "#E94560",
      secndBtnText: "NÃO",
      secndBtnFunc: testFunction,
    },
  ];


  return (
    <S.Container>
      <Modal showModal={showModal} setShowModal={setShowModal} modalOptions={modalOpt}/>
      <Header isModerator={false}/>

      <S.LeftSide>
        <h1>Perguntas Mais Votadas</h1>
        <QuestionCard upvotes={"9"} isModerator={false} text={"Você vai viajar para Europa?"} isSmall={true}/>
        <QuestionCard upvotes={"8"} isModerator={false} text={"Você vai viajar para Ásia?"} isSmall={true}/>
        <QuestionCard upvotes={"6"} isModerator={false} text={"Você vai viajar para Oceania?"} isSmall={true}/>
        <QuestionCard upvotes={"4"} isModerator={false} text={"Você vai viajar para Marte?"} isSmall={true}/>
      </S.LeftSide>

      <S.RightSide>
        
        <QuestionCard upvotes={"9"} isModerator={false} text={"Você vai viajar para Europa?"} isSmall={true}/>
        <QuestionCard upvotes={"8"} isModerator={false} text={"Você vai viajar para Ásia?"} isSmall={true}/>
        <QuestionCard upvotes={"6"} isModerator={false} text={"Você vai viajar para Oceania?"} isSmall={true}/>
        <QuestionCard upvotes={"4"} isModerator={false} text={"Você vai viajar para Marte?"} isSmall={true}/>
        <QuestionCard upvotes={"4"} isModerator={false} text={"Você vai viajar para Marte?"} isSmall={true}/>
      </S.RightSide> 

      <S.Bottom>
        <input type="text" placeholder="Digite aqui sua pergunta" />
        <SmallButton onClick={null} color={'#E94560'} title={'Enviar Pergunta'} />
      </S.Bottom>

      

    </S.Container>
  )
}

export default AskRoom
