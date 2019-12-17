import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class Visor extends Component {
    constructor (props) {
        super(props)
        this.state = { resultado: '' }
    }
    render() {
        return(
            <View>
                <TextInput style={Estilos.Visor}
                    placeholder='Resultado'
                    editable={false} />
            </View>
        )
    }
}

const Estilos = StyleSheet.create({
    Visor: {
        height: 100,
        fontSize: 30
    }
})
