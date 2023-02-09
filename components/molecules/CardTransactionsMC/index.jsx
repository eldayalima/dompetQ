import { View, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../../constants/Colors';
import TextAC from '../../atoms/TextAC';

export default function CardTransactionsMC() {
  return (
    <View style={style.container}>
      <View style={style.icon}>
        <TextAC type="caption">17/01/2023</TextAC>
        <TextAC type="h3">Makan Siang</TextAC>
        <TextAC type="secondaryR">Kebutuhan</TextAC>
      </View>
      <View style={style.info}>
        <TextAC type="primaryB" color={Colors.red}>Rp 1,500,000</TextAC>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: Colors.accents2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  icon: {
    justifyContent: 'center',
  },
  info: {
    justifyContent: 'center',
  },
});
