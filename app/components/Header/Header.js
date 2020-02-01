import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
      source={require('../../Images/img1.png')} 
      style={styles.logo}/>
      <Text style={styles.text}>Shopping Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    width: Dimensions.get('window').width,
  },
  logo: {
      width: 40,
      height: 40,
      marginTop: 0,
  },
  text: {
    marginTop: 0,
    marginLeft: 10,
    color: '#5e5e5e',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
