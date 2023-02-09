import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, View,
} from 'react-native';
import React from 'react';
import CardSummaryMC from '../components/molecules/CardSummaryMC';
import Colors from '../constants/Colors';
import TextAC from '../components/atoms/TextAC';
import ListTrasactionsOC from '../components/organisms/ListTransactionsOC';

const dummyData = [
  {
    id: 1,
    type: 'outcome',
    date: '18/01/2023',
    title: 'Launch',
    category: 'Needs',
    total: 100000,
  },
  {
    id: 2,
    type: 'income',
    date: '25/01/2023',
    title: 'Monthly Salary',
    category: 'Revenue',
    total: 10000000,
  },
  {
    id: 3,
    type: 'outcome',
    date: '26/01/2023',
    title: 'Monthly Expenses',
    category: 'Monthly Expenses',
    total: 1000000,
  },
  {
    id: 4,
    type: 'outcome',
    date: '26/01/2023',
    title: 'Car Gasoline',
    category: 'Transportations',
    total: 300000,
  },
  {
    id: 5,
    type: 'income',
    date: '26/01/2023',
    title: 'Freelance Salary',
    category: 'Monthly Expenses',
    total: 1500000,
  },
];
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
            <TextAC type="primaryM">Transactions</TextAC>
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
