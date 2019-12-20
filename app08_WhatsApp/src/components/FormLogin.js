import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha, autenticaUsuario } from '../actions/AutenticacaoActions'

class formLogin extends Component {
    renderBtnAcessar() {
        if (this.props.loadingLogin) {
            return(
                <ActivityIndicator size='large'/>
            )
        }
        if (Platform.OS == 'ios'){
            return(
                <View style={{ backgroundColor: '#115E54' }}>
                    <Button 
                        title='Acessar' 
                        color='#fff'
                        onPress={() => this._autenticaUsuario()} />
                </View>
            )
        }

    return(
            <Button 
                title='Acessar' 
                color='#115E54'
                onPress={() => this._autenticaUsuario()} />
        )
    }

    _autenticaUsuario() {
        const { email, senha } = this.props
        this.props.autenticaUsuario({ email, senha })
    }

    render() {
        return (
            <ImageBackground 
                style={{ flex: 1, width: null }} 
                source={require('../imgs/bg.png')} >
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2}}>
                        <TextInput
                            value={this.props.email} 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            placeholder='E-mail' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            placeholder='Senha' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaSenha(texto)} />
                        <Text style={{color: 'red', fontSize: 18 }}>
                            {this.props.erroLogin}
                        </Text>
                        <TouchableHighlight onPress={() => Actions.formCadastro() }>
                            <Text style={{ fontSize: 20, color: '#fff' }}>
                                Ainda não tem cadastro? Cadastre-se
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2}}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loadingLogin: state.AutenticacaoReducer.loadingLogin
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticaUsuario })(formLogin)
