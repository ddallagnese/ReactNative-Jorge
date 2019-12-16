import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class Itens extends Component {
    render() {
        return (
            <View style={estilos.item}>
                <View style={estilos.foto}>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
                </View>
                <View style={estilos.detalhesItem}>
                    <Text style={estilos.txtTitulo}>{ this.props.item.titulo }</Text>
                    <Text style={estilos.txtValor}>R$ { this.props.item.valor }</Text>
                    <Text style={estilos.txtDetalhes}>Local: { this.props.item.local_anuncio }</Text>
                    <Text style={estilos.txtDetalhes}>Publicação: { this.props.item.data_publicacao }</Text>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create ({
    item: {
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    foto: {
        height: 102,
        width: 102
    },
    detalhesItem: {
        marginLeft: 20,
        flex: 1
    },
    txtTitulo: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    txtValor: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetalhes: {
        fontSize: 16
    }
})