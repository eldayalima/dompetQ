import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../constants/Colors';
import TextAC from '../../../components/atoms/TextAC';
import IconButtonsAC from '../../../components/atoms/IconButtonsAC';

export default function SummaryCard({
  date = '',
  currency = '',
}) {
  const [showCurrency, setShowCurrency] = useState(false);

  function clickEyeToggle() {
    setShowCurrency((prevVal) => !prevVal);
  }

  const valRupiah = `Rp ${currency?.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}`;
  return (
    <View style={style.container}>
      <TextAC type="primaryM">{`Total Balance - ${date}`}</TextAC>
      <View style={style.secContainer}>
        <TextAC type="h1">
          { showCurrency ? valRupiah : 'Rp *********'}
        </TextAC>
        <View style={style.icon}>
          <IconButtonsAC
            icon="eye"
            size={24}
            color="white"
            onPress={() => clickEyeToggle()}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 10,
    backgroundColor: Colors.accents2,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  secContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
    justifyContent: 'center',
    marginTop: -5,
  },
});
