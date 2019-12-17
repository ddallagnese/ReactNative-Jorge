import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png')
const menuCliente = require('../imgs/menu_cliente.png')
const menuContato = require('../imgs/menu_contato.png')
const menuEmpresa = require('../imgs/menu_empresa.png')
const menuServico = require('../imgs/menu_servico.png')

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor = '#CCC' />
                <BarraNavegacao />
                <View style={estilos.logo}>
                    <Image source={logo} />
                </View>
                <View style={estilos.menu}>
                    <View style={estilos.menuGrupo}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'Clientes'})
                            }}>
                            <Image style={estilos.imgMenu} source={menuCliente} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'Contatos'})
                            }}>
                            <Image style={estilos.imgMenu} source={menuContato} />
                        </TouchableHighlight>
                    </View>
                    <View style={estilos.menuGrupo}>
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'Empresa'})
                            }}>
                            <Image style={estilos.imgMenu} source={menuEmpresa} />  
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#19D1C8'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'Servicos'})
                            }}>
                            <Image style={estilos.imgMenu} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create ({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
})