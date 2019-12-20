import { 
    MODIFICA_NOME, 
} from '../actions/Types'

const INITIAL_STATE = {
    adiciona_contato_email: 'teste@teste.com.br'
}

export default (state = INITIAL_STATE, action) => {
    // console.log(action)
    switch (action.type) {
        // case MODIFICA_NOME: 
        //     return { ...state, nome: action.payload, erroCadastro: ' ', erroLogin: ' ' }
        default:
            return state
    }
}