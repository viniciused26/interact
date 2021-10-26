import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'
import SmallButton from '../../components/SmallButton'
import api from '../../services/Api'
import logo from '../../assets/logoGrande.png'

function EnterRoom() {
  const history = useHistory()
  const [sala, setSala] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [codigo, setCodigo] = React.useState('');
  const firstUpdate = React.useRef(true);

  React.useLayoutEffect(() => {
    if (firstUpdate.current) firstUpdate.current = false;
    else {
      localStorage.removeItem("id_usuario");
      api.post('/usuarios', { nome_usuario: username, id_sala: sala }).then(response => localStorage.setItem('id_usuario', response.data.id_usuario))
      history.push(`/rooms/ask/${sala}`)
    }

  }, [sala])

  function handleUserameChange(event) {
    setUsername(event.target.value)
  }

  function handleCodeChange(event) {
    setCodigo(event.target.value)
  }

  function navigateToHomepage() {
    history.push('/')
  }

  return (
    <S.Container>
      <img src={logo} alt="Logo" />
      <span> Entre em uma  sala </span>
      <input type="text" onChange={handleUserameChange} placeholder="Digite o seu nome de usuário" />
      <input type="text" onChange={handleCodeChange} placeholder="Digite o código da sala" />
      <SmallButton onClick={() => setSala(codigo)} color={'#0F3460'} title={'ENTRAR'} />
      <br />
      <SmallButton onClick={navigateToHomepage} color={'#E94560'} title={'VOLTAR'} />
    </S.Container>
  )
}

export default EnterRoom
