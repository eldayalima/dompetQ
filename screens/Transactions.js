import {
  View, SafeAreaView, ScrollView, StyleSheet, StatusBar, Platform,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import TextAC from '../components/atoms/TextAC';
import CardSummaryMC from '../components/molecules/CardSummaryMC';
import ListTrasactionsOC from '../components/organisms/ListTransactionsOC';
import { dummyData } from '../constants/DummyData';
import IconButtonsAC from '../components/atoms/IconButtonsAC';

export default function Transactions() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View style={style.scrollContainer}>
        <View style={style.containerHeader}>
          <TextAC>January - 2023</TextAC>
          <View style={style.containerHeaderChild}>
            <IconButtonsAC
              icon="filter"
              size={24}
              color="white"
              onPress={() => { console.log('filter'); }}
            />
            <IconButtonsAC
              icon="information-circle-outline"
              size={24}
              color="white"
              onPress={() => { console.log('info'); }}
            />
          </View>
        </View>
        <View style={style.cardSummary}>
          <CardSummaryMC type="income" value={1000000} />
          <CardSummaryMC type="outcome" value={500000} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListTrasactionsOC data={dummyData} />
        </ScrollView>
      </View>
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
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  containerHeaderChild: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  cardSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
});
