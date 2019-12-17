import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default props => (
    <TextInput style={Estilos.numero} value={props.num}/>
)

const Estilos = StyleSheet.create({
    numero: {
        height: 80,
        width: 140,
        fontSize: 20
    }
})
