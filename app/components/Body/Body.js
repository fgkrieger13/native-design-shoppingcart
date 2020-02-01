import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function Body() {
    return (
        <ScrollView style={styles.hero}>
            <View style={styles.column1}>
                <Image source={require('../../Images/img1.jpeg')}
                style={styles.image}/>
            </View>
            <View style={styles.column2}>
            <Image source={require('../../Images/img3.jpeg')}
                style={styles.image}/>
            </View>
            <View style={styles.column3}>
            <Image source={require('../../Images/img4.jpg')}
                style={styles.image}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    hero: {
        flex: 1,
    },
    image: {
        height: 200,
        marginTop: 10,
        width: Dimensions.get('window').width,
    }
});
