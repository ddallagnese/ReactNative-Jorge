import React, { Component } from 'react'
import { View, Text, Image, Button, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class BoasVindas extends Component {
    _botaoLogin() {
        if (Platform.OS == 'ios'){
            return(
                <View style={{ backgroundColor: '#115E54' }}>
                    <Button 
                        title='Fazer login' 
                        color='#fff'
                        onPress={() => Actions.formLogin() } />
                </View>
            )
        }

    return(
            <Button 
                title='Fazer login' 
                color='#115E54'
                onPress={() => Actions.formLogin() } />
        )
    }

    render() {
        return(
            <ImageBackground
                style={{ flex: 1, width: null }} 
                source={require('../imgs/bg.png')} >
                <View style={{ flex: 1, padding: 15 }}>        
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Seja Bem-Vindo</Text>
                        <Image source={require('../imgs/logo.png')} />
                    </View>
                    <View style={{ flex: 1 }}>
                        {this._botaoLogin()}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}