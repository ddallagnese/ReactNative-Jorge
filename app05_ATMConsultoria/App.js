import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class App5 extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'Principal' }}
                renderScene={(route, navigator) => {
                    switch (route.id) {
                        case 'Principal': return(<CenaPrincipal navigator={navigator} />)
                        case 'Clientes': return(<CenaClientes navigator={navigator} />)
                        case 'Contatos': return(<CenaContatos navigator={navigator} />)
                        case 'Empresa': return(<CenaEmpresa navigator={navigator} />)
                        case 'Servicos': return(<CenaServicos navigator={navigator} />)
                        default: return false
                    }
                }} />
        )
    }
}
