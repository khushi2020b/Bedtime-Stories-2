import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteStoryscreen from './screens/WriteStoryscreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNaviagtor} from 'react-navigation-tabs'
import {SearchBar} from 'react-native-elements'

export default function App() {
  
  return (
    <AppContainer />
  );
}

const TabNavigator = createBottomTabNaviagtor({
  WriteStory: {screens: WriteStoryscreen},
  ReadStory: {screens: SearchScreen},
});

const AppConatiner = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
