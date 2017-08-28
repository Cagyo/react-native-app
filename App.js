import {
  StackNavigator,
} from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { HomeScreen, ProfileScreen } from './screens';
import {
  ActionSheetProvider,
} from '@expo/react-native-action-sheet';

const Navigator = StackNavigator({
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

export default class App extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <Navigator />
      </ActionSheetProvider>
    );
  }
}
