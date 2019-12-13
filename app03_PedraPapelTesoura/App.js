import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

class App extends Component {
    
    constructor(props){
        super(props)
        this.state = { escolhaUsuario : '', escolhaComputador: '', resultado: '' }
    }

    jokenpo(escolhaUsuario){
        // Escolha do computador
        var numAleatorio = Math.floor(Math.random() * 3)
        var escolhaComputador = ''

        switch(numAleatorio){
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador = 'tesoura'; break;
        }

        var resultado = ''
        if (escolhaComputador == 'pedra'){
            if (escolhaUsuario == 'pedra'){
                resultado = 'Empate'
            }
            if (escolhaUsuario == 'papel'){
                resultado = 'Usuário ganhou'
            }
            if (escolhaUsuario == 'tesoura'){
                resultado = 'Computador ganhou'
            }
        }
        if (escolhaComputador == 'papel'){
            if (escolhaUsuario == 'papel'){
                resultado = 'Empate'
            }
            if (escolhaUsuario == 'tesoura'){
                resultado = 'Usuário ganhou'
            }
            if (escolhaUsuario == 'pedra'){
                resultado = 'Computador ganhou'
            }
        }
        if (escolhaComputador == 'tesoura'){
            if (escolhaUsuario == 'tesoura'){
                resultado = 'Empate'
            }
            if (escolhaUsuario == 'pedra'){
                resultado = 'Usuário ganhou'
            }
            if (escolhaUsuario == 'papel'){
                resultado = 'Computador ganhou'
            }
        }

        this.setState({ escolhaUsuario,
                        escolhaComputador,
                        resultado})
    }

    render() {
        return(
            <View>
                <Topo></Topo>
                <Text>Escolha Computador: {this.state.escolhaComputador} </Text>
                <Text>Escolha Usuário: {this.state.escolhaUsuario} </Text>
                <Text>Resultado: {this.state.resultado}</Text>
                <Button title="pedra" onPress={ () => {this.jokenpo('pedra')}} />
                <Button title="papel" onPress={ () => {this.jokenpo('papel')}} />
                <Button title="tesoura" onPress={ () => {this.jokenpo('tesoura')}} />
            </View>
        )
    }
}

class Topo extends Component {
    render(){
        return(
            <View>
                <Image source={require('./imgs/jokenpo.png')} />
            </View>
        )
    }
}

export default App;
