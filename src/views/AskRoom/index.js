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
  const [messages, setMessages] = React.useState()
  const [banidos, setBanidos] = React.useState()
  const [texto, setTexto] = React.useState('')
  const history = useHistory()
  const [isChat, setIsChat] = React.useState(false)

  const red = () => {
    setIsChat(false);
  }

  const blue = () => {
    setIsChat(true);
  }

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
        setMessages(response.data.mensagens)
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
    socket.on('recebe.mensagens', (msg) => {
      setMessages(msg)
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

  const handleChatSubmit = event => {
    event.preventDefault()
    if (texto.trim()) {
      socket.emit('envia.mensagem', {
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
                      name={sala.participantes.map(nome => {
                        if(pergunta.id_usuario === nome.id_usuario){
                          return nome.nome_usuario}
                      })}
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
        roomName={sala ? sala.nome_sala : null}
      />
      <S.HostName>
        <span>Host: {sala ? sala.participantes.map(nome => {
              if(sala.id_moderador === nome.id_usuario){
                return nome.nome_usuario}
            }): null}</span>
      </S.HostName>
      <S.LeftSide>
        {perguntas
          ? sortQuestions(perguntas).map((pergunta) => {
              if (!pergunta.is_respondida)
                return (
                  <QuestionCard
                  name={sala.participantes.map(nome => {
                    if(pergunta.id_usuario === nome.id_usuario){
                      return nome.nome_usuario}
                  })}
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
      
      <S.ChatButtons>
        <SmallButton onClick={red} color={"#E94560"} title={"Dúvidas"} id="yeah"/>
        <SmallButton onClick={blue} color={"#29415E"} title={"Bate-papo"} id="yeah"/>
      </S.ChatButtons>
     
      <S.RightSide color={isChat === false ? "#E94560" : "#29415E"}>
        <div id={isChat === false ? null : "none"}>
        {perguntas
          ? perguntas.map((pergunta) => {
              if (!pergunta.is_respondida)
                return (
                  <QuestionCard
                    name={sala.participantes.map(nome => {
                      if(pergunta.id_usuario === nome.id_usuario){
                        return nome.nome_usuario}
                    })}
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
          </div>

          <div id={isChat === false ? "none" : null}>
          {messages
          ? messages.map((pergunta) => {
              if (!pergunta.is_respondida)
                return (
                  <QuestionCard
                    name={sala.participantes.map(nome => {
                      if(pergunta.id_usuario === nome.id_usuario){
                        return nome.nome_usuario}
                    })}
                    id={pergunta.id_pergunta}
                    hideButton={true}
                    text={pergunta.conteudo}
                    isSmall={true}
                  />
                );
            })
          : null}
          </div>





          
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
          onClick={isChat === false ? handleSubmit : handleChatSubmit}
          color={"#E94560"}
          title={"Enviar"}
        />
      </S.Bottom>
    </S.Container>
  );
}

export default AskRoom;
