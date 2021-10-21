import React from 'react'

import * as S from './styles'

import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import SmallButton from '../../components/SmallButton'
import api from '../../services/Api'
import { useHistory } from 'react-router'

function AskRoom(props) {
  const [sala, setSala] = React.useState()
  const [texto, setTexto] = React.useState()
  const history = useHistory()


  const navigateToHomepage = React.useCallback(() => {
    api.put(`/usuarios/${localStorage.getItem('id_usuario')}`, { id_sala: null })
    history.push('/')
  })

  const MINUTE_MS = 1000;

  React.useEffect(() => {
    const interval = setInterval(() => {
      const id_sala = props.match.params.code
      api.get(`/salas/${id_sala}`, {}).then(response => setSala(response.data))
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  function handleChange(event) {
    setTexto(event.target.value)
  }

  const handleSubmit = React.useCallback(() => {
    api.post(`/perguntas`, { id_usuario: localStorage.getItem('id_usuario'), id_sala: props.match.params.code, conteudo: texto })
  })

  function sortQuestions(questions) {
    var sortedQuestions = questions.slice().sort(function (a, b) {
      return b.concordaram.length - a.concordaram.length
    })
    return sortedQuestions
  }

  function isVoted(question) {
    var isVote = false
    question.concordaram.map(ids => {
      console.log(ids.id_usuario == localStorage.getItem('id_usuario'))
      if (ids.id_usuario == localStorage.getItem('id_usuario')) isVote = true
    })
    return isVote
  }
  
  return (
    <S.Container>
      <Header height='400px' text={sala ? sala.perguntas.map(pergunta => {
          if (pergunta.is_respondida)
            return <QuestionCard name={"Nome do usuário Aqui"} id={pergunta.id_pergunta} isVoted={isVoted(pergunta)} upvotes={pergunta.concordaram.length} isModerator={false} text={pergunta.conteudo} isSmall={true} />
        }) : null} isModerator={false} navigateToHomepage={navigateToHomepage} roomName="Nome da Sala Aqui" />

      <S.LeftSide>
        <h1>Perguntas Mais Votadas</h1>
        {sala ? sortQuestions(sala.perguntas).map(pergunta => {
          if (!pergunta.is_respondida)
            return <QuestionCard name={"Nome do usuário Aqui"} id={pergunta.id_pergunta} isVoted={isVoted(pergunta)} upvotes={pergunta.concordaram.length} isModerator={false} text={pergunta.conteudo} isSmall={true} />
        }) : null}
      </S.LeftSide>

      <S.RightSide>

        {sala ? sala.perguntas.map(pergunta => {
          if (!pergunta.is_respondida)
            return <QuestionCard name={"Nome do usuário Aqui"} id={pergunta.id_pergunta} isVoted={isVoted(pergunta)} upvotes={pergunta.concordaram.length} isModerator={false} text={pergunta.conteudo} isSmall={true} />
        }) : null}
      </S.RightSide>

      <S.Bottom>
        <input type="text" placeholder="Digite aqui sua pergunta" onChange={handleChange} />
        <SmallButton onClick={handleSubmit} color={'#E94560'} title={'Enviar Pergunta'} />
      </S.Bottom>



    </S.Container>
  )
}

export default AskRoom
