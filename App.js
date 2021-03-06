import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header/Header';
import Hero from './app/components/Hero/Hero';
import Body from './app/components/Body/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Hero />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
