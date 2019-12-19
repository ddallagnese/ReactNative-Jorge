import { 
    MODIFICA_EMAIL, 
    MODIFICA_NOME, 
    MODIFICA_SENHA, 
    CADASTRO_USUARIO_ERRO, 
    CADASTRO_USUARIO_SUCESSO, 
    LOGIN_USUARIO_ERRO, 
    LOGIN_USUARIO_SUCESSO 
} from '../actions/Types'

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ' ',
    erroLogin: ' '
}

export default (state = INITIAL_STATE, action) => {
    // console.log(action)
    switch (action.type) {
        case MODIFICA_NOME: 
            return { ...state, nome: action.payload, erroCadastro: ' ', erroLogin: ' ' }
        case MODIFICA_EMAIL: 
            return { ...state, email: action.payload, erroCadastro: ' ', erroLogin: ' ' }
        case MODIFICA_SENHA: 
            return { ...state, senha: action.payload, erroCadastro: ' ', erroLogin: ' ' }
        case CADASTRO_USUARIO_ERRO: 
            return { ...state, erroCadastro: action.payload }
        case CADASTRO_USUARIO_SUCESSO: 
            return { ...state, nome: '', senha: '' }
        case LOGIN_USUARIO_ERRO: 
            return { ...state, erroLogin: action.payload }
        // case LOGIN_USUARIO_SUCESSO: 
        //     return { ...state, nome: '', senha: '' }
        default:
            return state
    }
}