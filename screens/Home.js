import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, View,
} from 'react-native';
import React from 'react';
import CardSummaryMC from '../components/molecules/CardSummaryMC';
import Colors from '../constants/Colors';
import TextAC from '../components/atoms/TextAC';
import ListTrasactionsOC from '../components/organisms/ListTransactionsOC';
import { dummyData } from '../constants/DummyData';

export default function Home() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <ScrollView style={style.scrollContainer}>
        <View style={style.cardSummary}>
          <CardSummaryMC type="income" value={1000000} />
          <CardSummaryMC type="outcome" value={500000} />
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={style.subTitleContainer}>
            <TextAC type="primaryM">Recent Transactions</TextAC>
            <TextAC type="secondaryR">
              {'More Details >'}
            </TextAC>
          </View>
          <ListTrasactionsOC data={dummyData} />
        </View>
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
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  cardSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
