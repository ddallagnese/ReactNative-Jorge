import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

class AdicionarContato extends Component {
    renderBtnAdicionar() {
        // if (this.props.loadingLogin) {
        //     return(
        //         <ActivityIndicator size='large'/>
        //     )
        // }
        if (Platform.OS == 'ios'){
            return(
                <View style={{ backgroundColor: '#115E54' }}>
                    <Button 
                        title='Adicionar' 
                        color='#fff'
                        onPress={() => false} />
                </View>
            )
        }

    return(
            <Button 
                title='Adicionar' 
                color='#115E54'
                onPress={() => false} />
        )
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='E-mail'
                            value={this.props.adiciona_contato_email}
                            style={{ fontSize: 20, height: 45 }}
                            onChange={() => false}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        {this.renderBtnAdicionar()}
                    </View>
                </View>
            
        )
    }
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email
    }
)

export default connect(mapStateToProps, null)(AdicionarContato)