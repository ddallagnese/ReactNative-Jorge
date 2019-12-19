import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { 
    modificaNome,
    modificaEmail, 
    modificaSenha,
    cadastraUsuario } from '../actions/AutenticacaoActions'

class formCadastro extends Component {
    _botaoCadastrar() {
        if (Platform.OS == 'ios'){
            return(
                <View style={{ backgroundColor: '#115E54' }}>
                    <Button 
                        title="Cadastrar" 
                        color='#fff'
                        onPress={() => this._cadastraUsuario()} />
                </View>
            )
        }
        return(
            <Button 
                title="Cadastrar" 
                color='#115E54'
                onPress={() => this._cadastraUsuario()} />
        )
    }

    _cadastraUsuario() {
        const { nome, email, senha } = this.props
        this.props.cadastraUsuario({ nome, email, senha })
    }

    render(){
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')} >
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome} 
                            placeholder="Nome" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            onChangeText={texto => this.props.modificaNome(texto)} />
                        <TextInput
                            value={this.props.email} 
                            placeholder="E-mail" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput
                            secureTextEntry 
                            value={this.props.senha} 
                            placeholder="Senha" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            onChangeText={texto => this.props.modificaSenha(texto)} />
                        <Text style={{ color:'red', fontSize: 18}}>
                            {this.props.erroCadastro}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this._botaoCadastrar()}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro
    }
)

export default connect(
    mapStateToProps, 
    {   modificaNome, 
        modificaEmail, 
        modificaSenha,
        cadastraUsuario })(formCadastro)