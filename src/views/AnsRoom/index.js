import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import api from '../../services/Api'
import { useHistory } from 'react-router'

function AnsRoom(props) {
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

  function pergunta() {
    return sala.perguntas.map(pergunta => (
      <QuestionCard
        upvotes={pergunta.concordaram.length}
        isModerator={true}
        text={pergunta.conteudo}
        isSmall={true}
      />
    ))
  }

  const navigateToHomepage = React.useCallback(() => {
    api.delete(`/salas/${props.match.params.code}`, {})
    history.push('/')
  })

  const MINUTE_MS = 1000

  React.useEffect(() => {
    const interval = setInterval(() => {
      const id_sala = props.match.params.code
      api.get(`/salas/${id_sala}`, {}).then(response => setSala(response.data))
    }, MINUTE_MS)

    return () => clearInterval(interval) // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  function sortQuestions(questions) {
    var sortedQuestions = questions.slice().sort(function (a, b) {
      return b.concordaram.length - a.concordaram.length
    })
    return sortedQuestions
  }

  const modalOptions = [
    {
      text: 'Deseja mesmo limpar estas perguntas?',
      firstBtnColor: '#379392',
      firstBtnText: 'SIM',
      firstBtnFunc: testFunction,
      secndBtnColor: '#E94560',
      secndBtnText: 'NÃO',
      secndBtnFunc: openModal
    },
    {
      text: 'O código da sala é:  ' + props.match.params.code,
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
        text={'As perguntas apagadas poderiam ser enviadas aqui'}
        isModerator={true}
        navigateToHomepage={navigateToHomepage}
        roomName={'Nome da Sala Aqui'}
      />

      <S.LeftSide>
        {sala
          ? sortQuestions(sala.perguntas).map(pergunta => {
              if (!pergunta.is_respondida)
                return (
                  <QuestionCard
                    name={'Nome do usuário Aqui'}
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
          : null}
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
