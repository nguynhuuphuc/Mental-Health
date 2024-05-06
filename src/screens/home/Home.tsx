import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {style} from './Style';
import Body from './components/Body';
import ToolBar from './components/ToolBar';
import Header from './components/Header';

export default function Home() {
  return (
    <SafeAreaView style={style.cHome}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 32}}>
        <Header />
        <Body />
      </ScrollView>
    </SafeAreaView>
  );
}
