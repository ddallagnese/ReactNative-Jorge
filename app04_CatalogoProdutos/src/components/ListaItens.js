import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Itens from './Itens';

export default class ListaItens extends Component {
    render() {
        return (
            <View>
                <Itens />
                <Itens />
                <Itens />
            </View>
        )
    }
}
