import {
  StackNavigator,
} from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { HomeScreen, ProfileScreen } from './screens';

/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Toolbar 
          items={toolbarItems}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    );
  }
} */

export default StackNavigator({
  Home: { 
    screen: HomeScreen, 
    path: 'home',
    navigationOptions: {
      title: 'Home'
    } 
  },
  Profile: { 
    screen: ProfileScreen, 
    path: 'profile',
    navigationOptions: {
      title: 'Profile'
    } 
  },
});
