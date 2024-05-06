import {View, Text} from 'react-native';
import React from 'react';
import BottomTab from './src/screens/bottomTab/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import Header from './src/screens/home/components/Header';
import ToolBar from './src/screens/home/components/ToolBar';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
}
