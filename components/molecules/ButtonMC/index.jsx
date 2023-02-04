import {
  Pressable, StyleSheet,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import TextAC from '../../atoms/TextAC';

const typeButton = {
  success: [Colors.green],
  danger: [Colors.red],
  primary: [Colors.blue],
};
export default function ButtonMC({
  onPress, children, icon, type = 'primary',
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        style.button,
        { backgroundColor: typeButton[type][0] },
        pressed && style.pressed,
      ]}
    >
      {icon && (<Ionicons style={style.icon} size={25} color="#FFFFFF" name={icon} />)}
      <TextAC type="primaryB">
        {children}
      </TextAC>
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 300,
    borderRadius: 7,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
  },
});
