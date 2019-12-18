import firebase from 'firebase'
import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class App extends Component {
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAInQX3dTmKV8p9T6etWdC84PwQsS2wNAo",
            authDomain: "configuracaofirebasereac-48396.firebaseapp.com",
            databaseURL: "https://configuracaofirebasereac-48396.firebaseio.com",
            projectId: "configuracaofirebasereac-48396",
            storageBucket: "",//""configuracaofirebasereac-48396.appspot.com",
            messagingSenderId: "448583407629",
            appId: "1:448583407629:web:87bfb8f984151d57acdd44"
        };
        // Initialize Firebase
        !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
        // firebase.initializeApp(firebaseConfig);
    }

    cadastrarUsuario() {
        let email = 'dallagnese@gmail.com'
        let senha = '123456'

        const usuario = firebase.auth()
        usuario.createUserWithEmailAndPassword(email, senha)
            .catch(
                (erro) => {
                    alert(erro.code+' '+erro.message)
                }
            )
    }

    verificarUsuarioLogado() {
        const usuario = firebase.auth()
        usuario.onAuthStateChanged(
            (usuarioAtual) => {
                if (usuarioAtual){
                    alert('Logado')
                } else {
                    alert('Não logado')
                }
            }
        )
    }

    deslogarUsuario() {
        const usuario = firebase.auth()
        usuario.signOut()
    }

    logarUsuario() {
        let email = 'dallagnese@gmail.com'
        let senha = '123456'

        const usuario = firebase.auth()
        usuario.signInWithEmailAndPassword(email, senha)
            .catch(
                (erro) => {
                    alert(erro.code+' '+erro.message)
                }
            )
    }

    render() {
        return (
            <View>
                <Button
                    onPress={ () => {this.cadastrarUsuario()}}
                    title='Cadastrar Usuário' 
                    color='#841584' 
                    accessibilityLabel='Salvar dados'  
                />
                <Button
                    onPress={ () => {this.verificarUsuarioLogado()}}
                    title='Verificar usuário logado' 
                    color='#841584' 
                    accessibilityLabel='Listar dados'  
                />
                <Button
                    onPress={ () => {this.deslogarUsuario()}}
                    title='Deslogar usuário' 
                    color='#841584' 
                    accessibilityLabel='Listar dados'  
                />
                <Button
                    onPress={ () => {this.logarUsuario()}}
                    title='Logar usuário' 
                    color='#841584' 
                    accessibilityLabel='Listar dados'  
                />
                <Text>
                    
                </Text>
            </View>
        )
    }
}

export default App;
