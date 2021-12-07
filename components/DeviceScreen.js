import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import * as Device from 'expo-device';
import ListItem from './ListItem';
import MyButton from './MyButton';

export default class DeviceScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            devInfo: []
        };
        this.setDevInfo()
    }
    async setDevInfo() {
        let devInfo = [
            { name: "brand", val: Device.brand },
            { name: "devName", val: Device.deviceName },
            { name: "manufact", val: Device.manufacturer },
            { name: "modelName", val: Device.modelName },
            { name: "devType", val: Device.DeviceType[await Device.getDeviceTypeAsync()] },
            { name: "maxMem", val: (await Device.getMaxMemoryAsync()) / (1024 ** 2) + "MB" },
            { name: "osName", val: Device.osName },
            { name: "osVer", val: Device.osVersion },
            { name: "apiLevel", val: Device.platformApiLevel },
            { name: "totalMem", val: Math.round((Device.totalMemory / (1024 ** 3)) * 100) / 100 + "GB" }
        ];
        this.setState({ devInfo });
    }
    delete(name) {
        this.setState({ devInfo: this.state.devInfo.filter((item) => { return item.name != name }) })
    }
    render() {
        const renderItem = ({ item }) => {
            return <ListItem name={item.name} val={item.val} del={() => { this.delete(item.name) }} />
        }
        return (
            <View style={styles.container}>
                <View style={styles.refreshArea}>
                    <MyButton text="REFRESH INFO" press={() => { this.setDevInfo() }} />
                </View>
                <FlatList style={styles.list} data={this.state.devInfo}
                    keyExtractor={(item) => item.name} renderItem={renderItem} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    refreshArea: {
        height: "10%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1
    }
});