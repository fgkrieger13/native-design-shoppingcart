import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Image
          source={require('../../Images/img2.jpeg')}
          style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
  },
  image: {
      height: 200,
      width: Dimensions.get('window').width,
  }
});
