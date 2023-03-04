import {
  Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet,
} from 'react-native';
import React from 'react';
import TextInputMC from '../components/molecules/TextInputMC';
import Colors from '../constants/Colors';
import DropdownSelectMC from '../components/molecules/DropdownSelectMC';

export default function AddTransactions() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <ScrollView style={style.scrollContainer}>
        <TextInputMC
          title="Jumlah Uang"
          placeholder="2000000"
          keyboardType="number-pad"
        />
        <DropdownSelectMC
          title="Pilih Kategori"
          placeholder="Tekan disini untuk memilih"
          options={
            [
              {
                option: 'Kebutuhan',
                value: 1,
              },
              {
                option: 'Makanan',
                value: 2,
              },
              {
                option: 'Hiburan',
                value: 3,
              },
              {
                option: 'Perawatan',
                value: 4,
              },
              {
                option: 'Jajan Cemilan',
                value: 5,
              },
              {
                option: 'Modif Motor',
                value: 6,
              },
            ]
          }
        />
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
