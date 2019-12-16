import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const imgPedra = require('../../imgs/pedra.png')
const imgPapel = require('../../imgs/papel.png')
const imgTesoura = require('../../imgs/tesoura.png')

class Icone extends Component {
    render(){
        if (this.props.escolha === 'pedra') {
            return(
                <View style={estilos.icone}>
                    <Text style={estilos.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPedra} />
                </View>
            )
        } else if (this.props.escolha === 'papel') {
            return(
                <View style={estilos.icone}>
                    <Text style={estilos.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPapel} />
                </View>
            )
        } else if (this.props.escolha === 'tesoura') {
            return(
                <View style={estilos.icone}>
                    <Text style={estilos.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgTesoura} />
                </View>
            )
        }
        return false;
    }
}

const estilos = StyleSheet.create({
    icone: {
        fontSize: 15,
        alignItems: 'center'
    },
    txtJogador: {
        alignItems: 'center',
        marginTop: 10
    }
})

export default Icone
