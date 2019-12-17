import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

export default props => (
    <View style={Estilos.topo}>
        <Text style={Estilos.txtTitulo}>
            Calculadora
        </Text>
    </View>
)

const Estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#2196F3',
        padding: Platform.OS === 'ios' ? 20 : 10,
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 25,
        color: '#FFF'
    }
})