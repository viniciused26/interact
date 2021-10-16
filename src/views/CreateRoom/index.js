import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'
import SmallButton from '../../components/SmallButton'
import api from '../../services/Api'

function CreateRoom() {
    const history = useHistory()
    const [sala, setSala] = React.useState();
    const firstUpdate = React.useRef(true);

    React.useLayoutEffect(() => {
        if (firstUpdate.current) firstUpdate.current = false;
        else history.push(`/rooms/adm/${sala}`)

    }, [sala])

    const createRoom = React.useCallback(() => {
        if (localStorage.getItem('id_usuario'))
            api.post('/salas', { id_moderador: localStorage.getItem('id_usuario') }).then(response => setSala(response.data.id_sala))
        else
            api.post('/usuarios', {}).then(response => {
                localStorage.setItem('id_usuario', response.data.id_usuario)
                api.post('/salas', { id_moderador: response.data.id_usuario }).then(response => setSala(response.data.id_sala))
            })

    })

    function navigateToHomepage() {
        history.push('/')
    }

    return (
        <S.Container>
            <span> Crie uma nova sala </span>
            <input type="text" placeholder="Como deseja ser chamado?" />
            <input type="text" placeholder="Qual deve ser o nome da sala?" />
            <SmallButton onClick={createRoom} color={'#E94560'} title={'CRIAR'} />
            <br /><br />
            <SmallButton onClick={navigateToHomepage} color={'#0f3460'} title={'VOLTAR'} />
        </S.Container>

    )
}

export default CreateRoom