import React from 'react'
import { View, Text, StatusBar, Platform, Image, TouchableHighlight } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import { Actions } from 'react-native-router-flux'

export default props => (
    <View style={{ backgroundColor: '#115E54', elevation: 4, marginBottom: 6 }}>
        <StatusBar backgroundColor='#114D44'/>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ 
                    height: (Platform.OS === 'ios' ? 60 : 50), 
                    justifyContent: 'center',
                    paddingTop: (Platform.OS === 'ios' ? 10 : 0) }}>
                <Text style={{ color: 'white', fontSize: 20, marginLeft: 20 }}>
                    WhatsApp Clone
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <View style={{ 
                        width: 50, 
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: (Platform.OS === 'ios' ? 10 : 0) }}>
                    <TouchableHighlight 
                        onPress={() => Actions.adicionarContato() }
                        underlayColor='#114D44'>
                        <Image source={require('../imgs/adicionar-contato.png')} />
                    </TouchableHighlight>
                </View>
                <View style={{ 
                        justifyContent: 'center',
                        paddingTop: (Platform.OS === 'ios' ? 10 : 0) }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>
                        Sair
                    </Text>
                </View>
            </View>
        </View>
        <TabBar {...props} style={{ backgroundColor: '#115E54', elevation: 0 }} />
    </View>
)