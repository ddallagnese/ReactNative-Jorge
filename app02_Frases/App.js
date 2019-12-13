import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { white } from 'ansi-colors';

const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
}

const gerarNovaFrase = () => {
    var numeroAleatorio = Math.floor(Math.random() * 5)

    var frases = Array()
    frases[0] = 'Frase 1'
    frases[1] = 'Frase 2'
    frases[2] = 'Frase 3'
    frases[3] = 'Frase 4'
    frases[4] = 'Frase 5'
    Alert.alert(frases[numeroAleatorio])
}

const App = () => {
    return (
        <View style={Estilos.principal}>
            <Image source={require('./imgs/logo.png')} />
            <TouchableOpacity
                onPress={gerarNovaFrase}
                style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>
                    Nova Frase
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default App;
