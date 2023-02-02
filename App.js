import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Welcome from './screens/Welcome';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthUser] = useState(false);

  function AuthenticatedStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    );
  }

  function UnauthenticatedStack() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {!isAuthUser && <UnauthenticatedStack />}
        {isAuthUser && <AuthenticatedStack />}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131F33',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
