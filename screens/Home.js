import { StyleSheet, View } from 'react-native';
import React from 'react';
import CardSummaryMC from '../components/molecules/CardSummaryMC';
import Colors from '../constants/Colors';

export default function Home() {
  return (
    <View style={style.container}>
      <View style={style.cardSummary}>
        <CardSummaryMC type="income" value={1000000} />
        <CardSummaryMC type="outcome" value={500000} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    minHeight: '100%',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  cardSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
