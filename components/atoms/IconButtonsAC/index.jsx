import {
  Pressable, StyleSheet,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function IconButtonsAC({
  icon,
  size = 30,
  color,
  onPress,
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [style.button, pressed && style.pressed]}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
