import { View, Text } from 'react-native';
import React from 'react';

const fontSize = {
  primary: 16,
  secondary: 12,
  h1: 40,
  h2: 32,
  h3: 20,
};

const fontFamily = {
  reguler: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  bold: 'Poppins_600SemiBold',
};

const fontStyles = {
  primaryR: [fontSize.primary, fontFamily.reguler],
  primaryM: [fontSize.primary, fontFamily.medium],
  primaryB: [fontSize.primary, fontFamily.bold],
  secondaryR: [fontSize.secondary, fontFamily.reguler],
  secondaryM: [fontSize.secondary, fontFamily.medium],
  secondaryB: [fontSize.secondary, fontFamily.bold],
  h1: [fontSize.h1, fontFamily.bold],
  h2: [fontSize.h2, fontFamily.bold],
  h3: [fontSize.h3, fontFamily.bold],
};

export default function TextAC({
  children, type = 'primaryR', addStyle, color = '#FFFFFF',
}) {
  const style = fontStyles[type];

  return (
    <View>
      <Text
        style={{
          fontSize: style[0],
          color,
          fontFamily: style[1],
          ...addStyle,
        }}
      >
        {children}
      </Text>
    </View>
  );
}
