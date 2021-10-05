import React from 'react'

import * as S from './styles'

import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

function AnsRoom() {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <S.Container>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Header/>

      <S.LeftSide>
        <QuestionCard upvotes={"9"} isModerator={true} text={"Você vai viajar para Europa?"}/>
        <QuestionCard upvotes={"8"} isModerator={true} text={"Você vai viajar para Ásia?"}/>
        <QuestionCard upvotes={"6"} isModerator={true} text={"Você vai viajar para Oceania?"}/>
        <QuestionCard upvotes={"4"} isModerator={true} text={"Você vai viajar para Marte?"}/>
      </S.LeftSide>

      <S.RightSide>
        <Button color={'#E94560'} title={'LIMPAR PERGUNTAS'} />
        <Button color={'#379392'} title={'COMPARTILHAR SALA'} onClick={openModal}/>
      </S.RightSide> 

      
     

    </S.Container>
  )
}

export default AnsRoom
