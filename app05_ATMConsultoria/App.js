import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class App5 extends Component {
    render() {
        return (
            <CenaClientes />
        )
    }
}
