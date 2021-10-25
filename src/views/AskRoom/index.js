import React from "react";

import * as S from "./styles";

import Header from '../../components/Header'
import QuestionCard from '../../components/QuestionCard'
import SmallButton from '../../components/SmallButton'
import api from '../../services/Api'
import { useHistory } from 'react-router'
import io from 'socket.io-client'

const socket = io(api.defaults.baseURL)

function AskRoom(props) {
  const [idSala, setIdSala] = React.useState(props.match.params.code)
  const [sala, setSala] = React.useState()
  const [perguntas, setPerguntas] = React.useState()
  const [texto, setTexto] = React.useState('')
  const history = useHistory()

  const navigateToHomepage = () => {
    api.delete(`/usuarios/${localStorage.getItem("id_usuario")}`, {});
    localStorage.removeItem("id_usuario");
    history.push('/')
  }

  React.useEffect(() => {
    if (idSala) {
      api.get(`/salas/${idSala}`, {}).then(response => {
        setSala(response.data)
        setPerguntas(response.data.perguntas)
      })
    }
  }, [idSala])

  React.useEffect(() => {
    socket.on('recebe.perguntas', (perguntas) => {
      setPerguntas(perguntas)
    })
  }, [])

  function handleChange(event) {
    setTexto(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (texto.trim()) {
      socket.emit('envia.pergunta', {
        id_usuario: localStorage.getItem('id_usuario'),
        id_sala: props.match.params.code,
        conteudo: texto
      })

      setTexto('')
    }
  }

  function sortQuestions(questions) {
    var sortedQuestions = questions.slice().sort(function (a, b) {
      return b.concordaram.length - a.concordaram.length;
    });
    return sortedQuestions;
  }

  function isVoted(question) {
    var isVote = false
    question.concordaram.map(ids => {
      if (ids.id_usuario == localStorage.getItem('id_usuario')) isVote = true
    })
    return isVote
  }

  return (
    <S.Container>
      <Header
        height="400px"
        background="#24364D"
        text={
          perguntas
            ? perguntas.map((pergunta) => {
                if (pergunta.is_respondida)
                  return (
                    <QuestionCard
                      name={"Nome do usuário Aqui"}
                      id={pergunta.id_pergunta}
                      isVoted={isVoted(pergunta)}
                      upvotes={pergunta.concordaram.length}
                      isModerator={false}
                      text={pergunta.conteudo}
                      isSmall={true}
                    />
                  );
              })
            : null
        }
        time={<h3>Selecione o tempo de intervalo de envio de uma mensagem</h3>}
        isTimer={true}
        isModerator={false}
        navigateToHomepage={navigateToHomepage}
        roomName="Nome da Sala Aqui"
      />
      <S.HostName>
        <span>Host: Nome</span>
      </S.HostName>
      <S.LeftSide>
        {perguntas
          ? sortQuestions(perguntas).map((pergunta) => {
              if (!pergunta.is_respondida)
                return (
                  <QuestionCard
                    name={"Nome do usuário Aqui"}
                    id={pergunta.id_pergunta}
                    isVoted={isVoted(pergunta)}
                    upvotes={pergunta.concordaram.length}
                    isModerator={false}
                    text={pergunta.conteudo}
                    isSmall={true}
                  />
                );
            })
          : null}
      </S.LeftSide>

      <S.RightSide>
        {perguntas
          ? perguntas.map((pergunta) => {
              if (!pergunta.is_respondida)
                return (
                  <QuestionCard
                    name={"Nome do usuário Aqui"}
                    id={pergunta.id_pergunta}
                    isVoted={isVoted(pergunta)}
                    upvotes={pergunta.concordaram.length}
                    isModerator={false}
                    text={pergunta.conteudo}
                    isSmall={true}
                  />
                );
            })
          : null}
      </S.RightSide>

      <S.Bottom>
        <input
          id="messageBar"
          type="text"
          placeholder="Digite aqui sua pergunta"
          onChange={handleChange}
        />
        <SmallButton
          onClick={handleSubmit}
          color={"#E94560"}
          title={"Enviar Pergunta"}
        />
      </S.Bottom>
    </S.Container>
  );
}

export default AskRoom;
