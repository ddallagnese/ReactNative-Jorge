import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'

export default class Operacao extends Component {
    render() {
        return (
            <Picker
                style={Estilos.operacao}
                selectedValue={this.props.operacao}
                onValueChange={op => { this.props.atualizaOperacao(op) }}
            >
                <Picker.Item label='Soma' value='soma'/>
                <Picker.Item label='Subtração' value='subtracao'/>
            </Picker>
        )
    }
}

const Estilos = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
})