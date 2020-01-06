import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { contatosUsuarioFetch } from '../actions/AppActions'
import _ from 'lodash'
import { ListView } from 'deprecated-react-native-listview'

class Contatos extends Component {
    constructor(props) {
        super(props)

        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {fonteDeDados: [
            { id: '1', nome: 'Registro 1' },
            { id: '2', nome: 'Registro 2' },
            { id: '3', nome: 'Registro 3' },
            { id: '4', nome: 'Registro 4' }
        ]}
    }
    
    componentWillMount() {
        this.props.contatosUsuarioFetch()
    }

    render() {
        return (
            <FlatList
                data={this.state.fonteDeDados}
                renderItem={({ item }) => <View>
                                              <Text>
                                                  {item.nome}
                                              </Text>
                                          </View>}
                keyExtractor={item => item.id}                                          
            />
            // <ListView
            //     dataSource={this.state.fonteDeDados}
            //     renderRow={data => <View>
            //                             <Text>
            //                                 {data}
            //                             </Text>
            //                         </View>}
            // />
        )
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    return {}
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos)