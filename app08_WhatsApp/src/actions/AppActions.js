import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import b64 from 'base-64'
import { 
    ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO
} from './Types'
import _ from 'lodash'

export const modificaAdicionaContatoEmail = (texto) => {
    return {
        type: ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {
    // console.log(email)
    return dispatch => {
        let emailB64 = b64.encode(email)
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    // email do contato que queremos adicionar => email
                    const dadosUsuario = _.first(_.values(snapshot.val()))

                    // email do usuário autenticado => currentUser.email
                    const { currentUser } = firebase.auth()
                    let emailUsuarioB64 = b64.encode(currentUser.email)

                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch(erro => adicionaContatoErro(erro.message, dispatch))
                } else {
                    dispatch({ 
                        type: ADICIONA_CONTATO_ERRO,
                        payload: 'E-mail informado não corresponde a um usuário válido.'
                    })
                }
            })
    }
}

const adicionaContatoErro = (erro, dispatch) => (
    dispatch (
        {
            type: ADICIONA_CONTATO_ERRO,
            payload: erro
        }
    )
)

const adicionaContatoSucesso = dispatch => (
    dispatch (
        {
            type: ADICIONA_CONTATO_SUCESSO,
            payload: true
        }
    )
)

export const habilitaInclusaoContato = () => (
    {
        type: ADICIONA_CONTATO_SUCESSO,
        payload: false
    }
)