import {
  View, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import TextAC from '../../atoms/TextAC';
import Colors from '../../../constants/Colors';

export default function DropdownSelectMC({
  title,
  placeholder,
  options,
}) {
  const [isClicked, setIsClicked] = useState(false);

  function RenderOptions() {
    return (
      options?.map((opt) => (
        <TouchableOpacity style={style.textOption} key={`${opt.option}-${opt.value}`}>
          <TextAC>
            {opt.option}
          </TextAC>
        </TouchableOpacity>
      ))

    );
  }
  return (
    <View style={style.container}>
      <TextAC type="primaryB">{title}</TextAC>
      <TouchableOpacity
        onPress={() => { setIsClicked((prev) => !prev); }}
        style={style.inputContainer}
      >
        <TextAC type="primaryR" color={Colors.grey}>{placeholder}</TextAC>
        {
          isClicked ? (
            <Ionicons
              name="caret-up-outline"
              size={12}
              color={Colors.grey}
            />
          ) : (

            <Ionicons
              name="caret-down-outline"
              size={12}
              color={Colors.grey}
            />
          )
        }
      </TouchableOpacity>
      {
        isClicked && (
          <ScrollView style={style.dropdownSelect}>
            <RenderOptions />
          </ScrollView>
        )
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: Colors.accents,
    height: 50,
    marginVertical: 5,
    fontSize: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownSelect: {
    width: '100%',
    minHeight: 100,
    maxHeight: 200,
    borderRadius: 10,
    elevation: 10,
    marginTop: 20,
    backgroundColor: Colors.accents,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textOption: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingVertical: 10,
    marginBottom: 10,
  },
});
