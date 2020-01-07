import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, TouchableHighlight, FlatList } from 'react-native-gesture-handler'
import _ from 'lodash'
import { connect } from 'react-redux'
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/AppActions'

class Conversa extends Component {
    UNSAFE_componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail)
        this.criaFonteDeDados(this.props.conversa)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.contatoEmail != nextProps.contatoEmail) {
            this.props.conversaUsuarioFetch(nextProps.contatoEmail)
        }
        this.criaFonteDeDados(nextProps.conversa)
    }

    criaFonteDeDados( conversa ) {
        this.fonteDeDados = conversa
    }

    renderItem(conversa) {
        if (conversa.tipo === 'e') {
            return (
                <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }}>
                    <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1 }}>{conversa.mensagem}</Text>
                </View>
            )    
        }
        return (
            <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40 }}>
                <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#f7f7f7', elevation: 1 }}>{conversa.mensagem}</Text>
            </View>
        )
    }

    _enviaMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props
        this.props.enviaMensagem(mensagem, contatoNome, contatoEmail)
    }
    
    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <FlatList
                        data={this.fonteDeDados}
                        renderItem={({item}) => this.renderItem(item)}
                        keyExtractor={item => item.uid}
                    />
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
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid }
    })

    return ({
        conversa,
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa)