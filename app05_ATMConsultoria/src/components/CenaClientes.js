import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png')
const cliente1 = require('../imgs/cliente1.png')
const cliente2 = require('../imgs/cliente2.png')

export default class CenaClientes extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor = '#B9C941' />
                <BarraNavegacao />
                <View style={estilos.cabecalho}>
                    <Image source={detalheClientes} />
                    <Text style={estilos.txtTitulo}>Nossos Clientes</Text>
                </View>
                <View style={estilos.detalheCliente}>
                    <Image source={cliente1} />
                    <Text>Cliente 1</Text>
                </View>
                <View style={estilos.detalheCliente}>
                    <Image source={cliente2} />
                    <Text>Cliente 2</Text>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create ({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginLeft: 10
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
})