import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import iAndroid from "./android.png"

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Device app</Text>
                <Image source={iAndroid} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#aaa',
        marginBottom: 10
    }
});