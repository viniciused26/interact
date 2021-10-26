import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'
import SmallButton from '../../components/SmallButton'
import api from '../../services/Api'
import logo from '../../assets/logoGrande.png'

function CreateRoom() {
    const history = useHistory()
    const [sala, setSala] = React.useState();
    const [username, setUsername] = React.useState('');
    const firstUpdate = React.useRef(true);

    React.useLayoutEffect(() => {
        if (firstUpdate.current) firstUpdate.current = false;
        else history.push(`/rooms/adm/${sala}`)
    }, [sala])

    const createRoom = React.useCallback(() => {
        localStorage.removeItem("id_usuario");
        api.post('/usuarios', { nome_usuario: username }).then(response => {
            localStorage.setItem('id_usuario', response.data.id_usuario)
            api.post('/salas', { id_moderador: response.data.id_usuario }).then(response => setSala(response.data.id_sala))
            api.put(`/usuarios/${localStorage.getItem('id_usuario')}`, { id_sala: sala })
        })

    })

    function handleUserameChange(event) {
        setUsername(event.target.value)
    }

    function navigateToHomepage() {
        history.push('/')
    }

    return (
        <S.Container>
            <img src={logo} alt="Logo" />
            <span> Crie uma nova sala </span>
            <input type="text" onChange={handleUserameChange} placeholder="Como deseja ser chamado?" />
            <input type="text" placeholder="Qual deve ser o nome da sala?" maxlength="24" />
            <SmallButton onClick={createRoom} color={'#E94560'} title={'CRIAR'} />
            <br /><br />
            <SmallButton onClick={navigateToHomepage} color={'#0f3460'} title={'VOLTAR'} />
        </S.Container>

    )
}

export default CreateRoom