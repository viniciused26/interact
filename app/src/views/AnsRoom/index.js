import React from 'react'

import * as S from './styles'

import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

function AnsRoom() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpt, setModalOpt] = React.useState([]);

  const modalOptions = [
    {
      text: "Deseja mesmo limpar estas perguntas?",
      textInput: false,
      firstBtn: "#379392",
      firstBtnText: "SIM",
      secndBtn: "#E94560",
      secndBtnText: "NÃO",
    },
    {
      text: "XLR8",
      textInput: false,
      firstBtn: "#379392",
      firstBtnText: "COPIAR CÓDIGO",
      secndBtn: "#379392",
      secndBtnText: "COPIAR LINK",
    },
    {
      text: "Deseja mesmo encerrar a sala?",
      textInput: false,
      firstBtn: "#379392",
      firstBtnText: "SIM",
      secndBtn: "#E94560",
      secndBtnText: "NÃO",
    },
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
      <Header/>

      <S.LeftSide>
        <QuestionCard upvotes={"9"} isModerator={true} text={"Você vai viajar para Europa?"}/>
        <QuestionCard upvotes={"8"} isModerator={true} text={"Você vai viajar para Ásia?"}/>
        <QuestionCard upvotes={"6"} isModerator={true} text={"Você vai viajar para Oceania?"}/>
        <QuestionCard upvotes={"4"} isModerator={true} text={"Você vai viajar para Marte?"}/>
      </S.LeftSide>

      <S.RightSide>
        <Button color={'#E94560'} title={'LIMPAR PERGUNTAS'} onClick={() => {openModal(); setModalOption(0);}}/>
        <Button color={'#379392'} title={'COMPARTILHAR SALA'} onClick={() => {openModal(); setModalOption(1);}}/>
      </S.RightSide> 

    

    </S.Container>
  )
}

export default AnsRoom
