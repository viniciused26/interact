import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import api from '../../services/Api'
import { useHistory } from 'react-router'
import io from 'socket.io-client'
import noMessages from '../../assets/no_messages.png'

const socket = io(api.defaults.baseURL)

function AnsRoom(props) {
  const [idSala, setIdSala] = React.useState(props.match.params.code)
  const [perguntas, setPerguntas] = React.useState(false)
  const [banidos, setBanidos] = React.useState()
  const [showModal, setShowModal] = React.useState(false)
  const [modalOpt, setModalOpt] = React.useState([])
  const [update, setUpdate] = React.useState(true)
  const [sala, setSala] = React.useState()
  const history = useHistory()

  const testFunction = () => {
    setUpdate(!update)
  }

  function copyCodeToClipboard() {
    navigator.clipboard.writeText(props.match.params.code)
    openModal()
  }

  function copyLinkToClipboard() {
    navigator.clipboard.writeText(
      'https://interactfront.herokuapp.com/rooms/ask/' + props.match.params.code
    )
    openModal()
  }

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const setModalOption = num => {
    setModalOpt(modalOptions[num])
  }

  React.useEffect(() => {
    if (idSala) {
      api.get(`/salas/${idSala}`, {}).then(response => {
        setSala(response.data)
        setPerguntas(response.data.perguntas)
        setBanidos(response.data.banidos)
      })
    }
  }, [idSala])

  React.useEffect(() => {
    socket.on('recebe.perguntas', (perguntas) => {
      setPerguntas(perguntas)
    })
  }, [])

  React.useEffect(() => {
    socket.on('recebe.banidos', (banidos) => {
      setBanidos(banidos)
      console.log(banidos)
    })
  }, [])

  function pergunta () {
    var perguntasNaoRespondidas = []
    sortQuestions(perguntas).map(pergunta => {
      if (!pergunta.is_respondida)
      perguntasNaoRespondidas.push(
          <QuestionCard
            name={sala.participantes.map(nome => {
              if(pergunta.id_usuario === nome.id_usuario){
                return nome.nome_usuario}
            })}
            isVote={pergunta.is_respondida}
            onClick={() => {
              openModal()
              setModalOption(0)
            }}
            id={pergunta.id_pergunta}
            upvotes={pergunta.concordaram.length}
            isModerator={true}
            text={pergunta.conteudo}
            isSmall={true}
          />
        )
    })
    return perguntasNaoRespondidas
  }

  const navigateToHomepage = () => {
    api.delete(`/salas/${props.match.params.code}`, {})
    api.delete(`/usuarios/${localStorage.getItem('id_usuario')}`, {})
    localStorage.removeItem('id_usuario')
    history.push('/')
  }


  function sortQuestions(questions) {
    var sortedQuestions = questions.slice().sort(function (a, b) {
      return b.concordaram.length - a.concordaram.length
    })
    return sortedQuestions
  }

  const modalOptions = [
    {
      textTitle: 'Deseja mesmo limpar estas perguntas?',
      firstBtnColor: '#379392',
      firstBtnText: 'SIM',
      firstBtnFunc: testFunction,
      secndBtnColor: '#E94560',
      secndBtnText: 'NÃO',
      secndBtnFunc: openModal
    },
    {
      textTitle: 'O código da sala é:  ' + props.match.params.code,
      firstBtnColor: '#379392',
      firstBtnText: 'Copiar código da sala',
      firstBtnFunc: copyCodeToClipboard,
      secndBtnColor: '#E94560',
      secndBtnText: 'Copiar link da sala',
      secndBtnFunc: copyLinkToClipboard
    }
  ]
  
  return (
    <S.Container>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalOptions={modalOpt}
      />
      <Header
        idSala={idSala}
        height='400px'
        background="#24364D"
        text={perguntas
          ? perguntas.map(pergunta => {
              if (pergunta.is_respondida)
                return (
                  <QuestionCard
                    name={sala.participantes.map(nome => {
                      if(pergunta.id_usuario === nome.id_usuario){
                        return nome.nome_usuario}
                    })}
                    isVote={pergunta.is_respondida}
                    id={pergunta.id_pergunta}
                    upvotes={pergunta.concordaram.length}
                    isModerator={true}
                    text={pergunta.conteudo}
                    isSmall={true}
                  />
                )
            })
          : null}
        time={<h3>Selecione o tempo de intervalo de envio de uma mensagem</h3>}
        isTimer={true}
        isModerator={true}
        navigateToHomepage={navigateToHomepage}
        roomName={sala ? sala.nome_sala : null}
      />

      <S.LeftSide> 
        {perguntas == false ? <img src={noMessages} alt="nomess"/> : pergunta() }
      </S.LeftSide>
      

      <S.RightSide>
        <Button
          color={'#379392'}
          title={'COMPARTILHAR SALA'}
          onClick={() => {
            openModal()
            setModalOption(1)
          }}
        />
        {/*<Button color={'#E94560'} title={'HISTÓRICO DE PERGUNTAS'} onClick={() => { openModal(); setModalOption(0); }} />*/}
      </S.RightSide>
    </S.Container>
  )
}

export default AnsRoom
