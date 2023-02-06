/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
  useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Colors from './constants/Colors';
import Transactions from './screens/Transactions';
import Settings from './screens/Settings';
import Assets from './screens/Assets';

const Stack = createNativeStackNavigator();
const ButtomTabs = createBottomTabNavigator();

function ButtomNavigations() {
  return (
    <ButtomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.accents, height: 100 },
        headerTitleStyle: { fontSize: 25 },
        tabBarStyle: { backgroundColor: Colors.primary2, height: Platform.select({ ios: '10%', android: '8%' }) },
        tabBarShowLabel: false,
        headerTintColor: Colors.white,
        tabBarActiveTintColor: Colors.yellow,
      }}
    >
      <ButtomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <ButtomTabs.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: 'Transactions',
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'newspaper-sharp' : 'newspaper-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <ButtomTabs.Screen
        name="Assets"
        component={Assets}
        options={{
          title: 'Assets',
          tabBarLabel: 'Assets',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'pie-chart' : 'pie-chart-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <ButtomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </ButtomTabs.Navigator>
  );
}
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
          name="MenuOverview"
          component={ButtomNavigations}
          options={{ headerShown: false }}
        />
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
