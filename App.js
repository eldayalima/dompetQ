/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  function AuthenticatedStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.accents },
          headerTintColor: Colors.white,
          contentStyle: { backgroundColor: Colors.primary },
        }}
      >
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
        <Welcome setIsAuthUser={setIsAuthUser} />
      </View>
    );
  }

  if (!fontsLoaded) {
    return null;
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
