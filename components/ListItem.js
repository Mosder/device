import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MyButton from "./MyButton"
import iAndroid from "./android.png"

export default class DeviceScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={iAndroid} style={styles.img} />
                <View style={styles.texts}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.val}>{this.props.val}</Text>
                </View>
                <View style={styles.buttonView}>
                    <MyButton text="DELETE" press={() => { this.props.del() }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    img: {
        width: 80,
        height: 80,
        marginLeft: 20,
        marginRight: 20
    },
    texts: {
        justifyContent: 'center'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    val: {
        fontSize: 17,
        color: '#888'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    }
});