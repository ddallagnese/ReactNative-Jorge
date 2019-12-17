import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png')

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF'}}>
                <StatusBar backgroundColor='#61BD8C' />
                <BarraNavegacao voltar  navigator={this.props.navigator} corFundo='#61BD8C' />
                <View style={estilos.cabecalho}>
                    <Image source={detalheContatos} />
                    <Text style={estilos.txtTitulo}>Contatos</Text>
                </View>
                <View style={estilos.detalheContatos}>
                    <Text style={estilos.txtDetalheContato}>Tel: (47) 3333-2222</Text>
                    <Text style={estilos.txtDetalheContato}>Cel: (47) 99999-8888</Text>
                    <Text style={estilos.txtDetalheContato}>E-mail: contato@atmconsultoria.com</Text>
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
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheContato: {
        fontSize: 18,
        marginLeft: 20
    }
})