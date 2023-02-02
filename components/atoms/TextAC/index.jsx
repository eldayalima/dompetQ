import { View, Text } from 'react-native';
import React from 'react';

// const REM = 16;
const fontSize = {
  primary: 16,
  secondary: 12,
  h1: 40,
  h2: 32,
  h3: 20,
};

const fontWeight = {
  normal: 400,
  semibold: 500,
  bold: 600,
};

const fontStyles = {
  primaryR: [fontSize.primary, fontWeight.normal],
  primaryM: [fontSize.primary, fontWeight.semibold],
  primaryB: [fontSize.primary, fontWeight.bold],
  secondaryR: [fontSize.secondary, fontWeight.normal],
  secondaryM: [fontSize.secondary, fontWeight.semibold],
  secondaryB: [fontSize.secondary, fontWeight.bold],
  h1: [fontSize.h1, fontWeight.bold],
  h2: [fontSize.h2, fontWeight.bold],
  h3: [fontSize.h3, fontWeight.bold],
};

export default function TextAC({
  children, type, addStyle, color = '#FFFFFF',
}) {
  const style = fontStyles[type];

  return (
    <View>
      <Text
        style={{
          fontSize: style[0],
          fontWeight: `${style[1]}`,
          color,
          ...addStyle,
        }}
      >
        {children}
      </Text>
    </View>
  );
}
