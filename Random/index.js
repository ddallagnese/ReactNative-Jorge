import React from 'react'
import { View, Text, Button, AppRegistry } from 'react-native'

const gerarRandomico = () => {
    alert(Math.floor(Math.random() * 10))
}

const App = () => {
    return(
        <View>
            <Text>Gerador de números randômicos</Text>
            <Button
                title="Gerar um número randômico"
                onPress={gerarRandomico}
            />
        </View>
    )
}

AppRegistry.registerComponent('Random', () => App)