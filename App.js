import {
  StackNavigator,
} from 'react-navigation';
import React from 'react';
import {
  ActionSheetProvider,
} from '@expo/react-native-action-sheet';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/config';
import { initialState } from './src/store/initial-state';
import { HomeScreen, ProfileScreen } from './src/screens';

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home',
    navigationOptions: {
      title: 'Home',
    },
  },
  Profile: {
    screen: ProfileScreen,
    path: 'profile',
    navigationOptions: {
      title: 'Profile',
    },
  },
});

export const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <ActionSheetProvider>
          <Navigator />
        </ActionSheetProvider>
      </Provider>
    );
  }
}
