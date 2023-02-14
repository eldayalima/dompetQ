import {
  View, StyleSheet, TextInput,
} from 'react-native';
import React from 'react';
import Colors from '../../../constants/Colors';
import TextAC from '../../atoms/TextAC';

export default function TextInputMC({
  title = '',
  placeholder = '',
  keyboardType = 'default',
  isError = false,
  errMessage = '',
}) {
  return (
    <View>
      <TextAC type="primaryB">{title}</TextAC>
      <TextInput
        style={[style.textInput, isError && style.onError]}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey}
        keyboardType={keyboardType}
      />
      {
        isError && (
          <TextAC type="secondaryR" color={Colors.red} addStyle={style.textError}>
            {errMessage}
          </TextAC>
        )
      }
    </View>
  );
}

const style = StyleSheet.create({
  textInput: {
    height: 50,
    fontSize: 18,
    backgroundColor: Colors.accents,
    color: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  onError: {
    borderWidth: 2,
    borderColor: Colors.red,
    color: Colors.red,
  },
  textError: {
    marginLeft: '2%',
  },
});
