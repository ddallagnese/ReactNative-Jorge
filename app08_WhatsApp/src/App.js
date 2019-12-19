import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import Routes from './Routes'
import reducers from './reducers'

class App extends Component {
    componentWillMount() {
        let firebaseConfig = {
            apiKey: "AIzaSyCSsOkmdhQSvT1RjgwdV5qFTkto1LKMIck",
            authDomain: "whatsapp-clone-e2a17.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-e2a17.firebaseio.com",
            projectId: "whatsapp-clone-e2a17",
            storageBucket: "whatsapp-clone-e2a17.appspot.com",
            messagingSenderId: "724961580901",
            appId: "1:724961580901:web:a0323255cd80f6aa89f38c"
          };
        //   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
        //   firebase.initializeApp(firebaseConfig);        
    }

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        )
    }
}

export default App