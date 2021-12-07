import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => { this.props.press() }}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    press: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#444"
    }
});