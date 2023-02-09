import {
  View, SafeAreaView, ScrollView, StyleSheet, StatusBar,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import TextAC from '../components/atoms/TextAC';
import CardSummaryMC from '../components/molecules/CardSummaryMC';
import ListTrasactionsOC from '../components/organisms/ListTransactionsOC';
import { dummyData } from '../constants/DummyData';

export default function Transactions() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View style={style.scrollContainer}>
        <View style={style.containerHeader}>
          <TextAC>January - 2023</TextAC>
          <View style={style.containerHeaderChild}>
            <Ionicons name="filter" size={24} color="white" />
            <Ionicons name="information-circle-outline" size={24} color="white" style={{ marginLeft: 10 }} />
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
    paddingTop: StatusBar.currentHeight,
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
