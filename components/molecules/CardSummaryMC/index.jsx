import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import TextAC from '../../atoms/TextAC';
import Colors from '../../../constants/Colors';

export default function CardSummaryMC({
  type = 'income',
  value,
}) {
  const [showTransaction, setShowTrasactions] = useState(['income', 'outcome']);

  const valRupiah = `Rp ${value?.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}`;

  const typeValue = {
    income: ['arrow-down', Colors.green, 'Pendapatan'],
    outcome: ['arrow-up', Colors.red, 'Pengeluaran'],
  };

  function onPressCard(typeVal) {
    const currentVal = [...showTransaction];
    const idxVal = currentVal.findIndex((val) => val === typeVal);
    if (idxVal < 0) {
      currentVal.push(typeVal);
    } else {
      currentVal.splice(idxVal, 1);
    }
    setShowTrasactions(currentVal);
  }

  return (
    <Pressable
      onPress={() => { onPressCard(type); }}
      style={[
        style.container,
        type === 'income' ? { marginRight: 5 } : { marginLeft: 5 },
        showTransaction.every((val) => val !== type) && { opacity: 0.2 },
      ]}
    >
      <View style={style.icon}>
        <Ionicons name={typeValue[type][0]} size={30} color={typeValue[type][1]} />
      </View>
      <View style={style.info}>
        <TextAC type="secondaryR">{typeValue[type][2]}</TextAC>
        <TextAC type="primaryB">{valRupiah}</TextAC>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: Colors.accents2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
  },
  info: {
    justifyContent: 'center',
  },
});
