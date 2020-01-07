import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { contatosUsuarioFetch } from '../actions/AppActions'
import _ from 'lodash'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Actions } from 'react-native-router-flux'

class Contatos extends Component {
    
    UNSAFE_componentWillMount() {
        this.props.contatosUsuarioFetch()
        this.criaFonteDeDados(this.props.contatos)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.contatos)
    }

    criaFonteDeDados( contatos ) {
        this.fonteDeDados = contatos
    }

    renderItem(contato) {
        return (
            <TouchableHighlight
                onPress={ () => Actions.conversa({
                    title: contato.nome, 
                    contatoNome: contato.nome,
                    contatoEmail: contato.email }) }
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 25 }}>{contato.nome}</Text>
                    <Text style={{ fontSize: 18 }}>{contato.email}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <FlatList
                data={this.fonteDeDados}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={item => item.uid}
            />
        )
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos)