import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png')

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF'}}>
                <StatusBar backgroundColor='#EC7148' />
                <BarraNavegacao voltar  navigator={this.props.navigator} corFundo='#EC7148' />
                <View style={estilos.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={estilos.txtTitulo}>A Empresa</Text>
                </View>
                <View style={estilos.detalheEmpresa}>
                    <Text style={estilos.txtDetalheEmpresa}>
                        Aqui vai só um texto bem longo, provavelmente pra testar a quebra de linha
                    </Text>
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
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheEmpresa: {
        fontSize: 18,
        marginLeft: 20
    }
})