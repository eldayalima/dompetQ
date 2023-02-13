import { View, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../../constants/Colors';
import TextAC from '../../atoms/TextAC';

export default function CardTransactionsMC({
  type = 'income',
  date = '',
  title = '',
  category = '',
  source = '',
  total = '',
}) {
  const valRupiah = `Rp ${total?.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}`;
  return (
    <View style={style.container}>
      <View style={style.icon}>
        <TextAC type="caption">
          {date}
        </TextAC>
        <TextAC type="h3">
          {title}
        </TextAC>
        <TextAC type="secondaryR">
          {`${category} - ${source}`}
        </TextAC>
      </View>
      <View style={style.info}>
        <TextAC type="primaryB" color={type === 'income' ? Colors.green : Colors.red}>
          {valRupiah}
        </TextAC>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: Colors.accents2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignContent: 'center',
    marginTop: 20,
  },
  icon: {
    justifyContent: 'center',
  },
  info: {
    justifyContent: 'center',
  },
});
