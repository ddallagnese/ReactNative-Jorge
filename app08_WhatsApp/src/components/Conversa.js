import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { modificaMensagem, enviaMensagem } from '../actions/AppActions'

class Conversa extends Component {
    _enviaMensagem() {
console.log(this.props)
        const { mensagem, contatoNome, contatoEmail } = this.props
        this.props.enviaMensagem(mensagem, contatoNome, contatoEmail)
    }
    
    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    
                </View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto) }
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                    />
                    <TouchableHighlight onPress={this._enviaMensagem.bind(this)} underlayColor='#fff'>
                        <Image source={require('../imgs/enviar_mensagem.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem })(Conversa)