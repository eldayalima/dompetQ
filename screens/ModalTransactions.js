import {
  Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet,
} from 'react-native';
import React from 'react';
import TextInputMC from '../components/molecules/TextInputMC';
import Colors from '../constants/Colors';

export default function ModalTransactions() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <ScrollView style={style.scrollContainer}>
        <TextInputMC
          title="Jumlah Uang"
          placeholder="2000000"
          keyboardType="number-pad"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingTop: Platform.select({
      ios: StatusBar.currentHeight + 30,
      android: StatusBar.currentHeight,
    }),
    flex: 1,
  },
});
