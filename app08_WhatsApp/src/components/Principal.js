import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

const initialLayout = { width: Dimensions.get('window').width };

export default function Principal() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Conversas' },
    { key: '2', title: 'Contatos' },
  ]);

  renderHeader = props => <TabBarMenu {...props} />
  
  const renderScene = SceneMap({
    '1': Conversas,
    '2': Contatos
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderHeader}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
