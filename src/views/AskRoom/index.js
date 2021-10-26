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
  const [banidos, setBanidos] = React.useState()
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

  function isVoted(pergunta) {
    const is_concordado = pergunta.concordaram.find(el => el.id_usuario = localStorage.getItem('id_usuario'))
    return is_concordado != null
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
          value={texto}
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
