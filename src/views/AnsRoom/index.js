import React from 'react'

import * as S from './styles'

import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

function AnsRoom() {
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
      <Header isModerator={true}/>

      <S.LeftSide>
        <QuestionCard upvotes={"9"} isModerator={true} text={"Você vai viajar para Europa?"} isSmall={true}/>
        <QuestionCard upvotes={"8"} isModerator={true} text={"Você vai viajar para Ásia?"} isSmall={true}/>
        <QuestionCard upvotes={"6"} isModerator={true} text={"Você vai viajar para Oceania?"} isSmall={true}/>
        <QuestionCard upvotes={"4"} isModerator={true} text={"Você vai viajar para Marte?"} isSmall={true}/>
      </S.LeftSide>

      <S.RightSide>
        <Button color={'#E94560'} title={'LIMPAR PERGUNTAS'} onClick={() => {openModal(); setModalOption(0);}}/>
        <Button color={'#379392'} title={'COMPARTILHAR SALA'} onClick={() => {openModal(); setModalOption(1);}}/>
      </S.RightSide> 

    

    </S.Container>
  )
}

export default AnsRoom
