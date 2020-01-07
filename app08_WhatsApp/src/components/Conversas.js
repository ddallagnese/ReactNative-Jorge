import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import { conversasUsuarioFetch } from '../actions/AppActions'
import { Actions } from 'react-native-router-flux'
import { TouchableHighlight } from 'react-native-gesture-handler'

class Conversas extends Component {
    UNSAFE_componentWillMount() {
        this.props.conversasUsuarioFetch()
        this.criaFonteDeDados(this.props.conversas)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversas)
    }

    criaFonteDeDados( conversas ) {
        this.fonteDeDados = conversas
    }

    renderItem(conversas) {
        return (
            <TouchableHighlight
                onPress={ () => Actions.conversa({
                    title: conversas.nome, 
                    contatoNome: conversas.nome,
                    contatoEmail: conversas.email }) }
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 25 }}>{conversas.nome}</Text>
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
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return { ...val, uid }
    })

    return ({ conversas })
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas)