import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import TextAC from '../../atoms/TextAC';
import Colors from '../../../constants/Colors';

export default function CardSummaryMC({
  type = 'income',
  value,
}) {
  const valRupiah = `Rp ${value?.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}`;
  const typeValue = {
    income: ['arrow-down', Colors.green, 'Pendapatan'],
    outcome: ['arrow-up', Colors.red, 'Pengeluaran'],
  };
  return (
    <View style={style.container}>
      <View style={style.icon}>
        <Ionicons name={typeValue[type][0]} size={30} color={typeValue[type][1]} />
      </View>
      <View style={style.info}>
        <TextAC type="secondaryR">{typeValue[type][2]}</TextAC>
        <TextAC type="primaryB">{valRupiah}</TextAC>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '47%',
    borderRadius: 15,
    padding: 10,
    backgroundColor: Colors.accents2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    justifyContent: 'center',
  },
  info: {
    justifyContent: 'center',
  },
});
