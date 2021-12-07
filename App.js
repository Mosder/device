import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import DeviceScreen from './components/DeviceScreen';
import iAndroid from "./components/android.png"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="s1" component={HomeScreen}
          options={{
            title: 'home',
            headerShown: false,
            tabBarIcon: () => (
              <Image source={iAndroid} style={styles.tabImg} />
            )
          }} />
        <Tab.Screen name="s2" component={DeviceScreen}
          options={{
            title: 'info',
            headerStyle: {
              backgroundColor: '#0cc',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: 'device info',
            tabBarIcon: () => (
              <Image source={iAndroid} style={styles.tabImg} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  tabImg: {
    width: 30,
    height: 30
  }
});
