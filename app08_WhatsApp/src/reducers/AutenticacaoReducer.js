import { 
    MODIFICA_EMAIL, 
    MODIFICA_NOME, 
    MODIFICA_SENHA, 
    CADASTRO_USUARIO_ERRO, 
    CADASTRO_USUARIO_SUCESSO, 
    LOGIN_USUARIO_ERRO, 
    LOGIN_USUARIO_SUCESSO, 
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from '../actions/Types'

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ' ',
    erroLogin: ' ',
    loadingLogin: false,
    loadingCadastro: false
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
            return { ...state, erroCadastro: action.payload, loadingCadastro: false }
        case CADASTRO_USUARIO_SUCESSO: 
            return { ...state, nome: '', senha: '', loadingCadastro: false }
        case LOGIN_USUARIO_ERRO: 
            return { ...state, erroLogin: action.payload, loadingLogin: false }
        case LOGIN_USUARIO_SUCESSO: 
            return { ...state, ...INITIAL_STATE }
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loadingLogin: true }
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loadingCadastro: true }
        default:
            return state
    }
}