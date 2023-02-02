import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextAC from '../components/atoms/TextAC';
import Colors from '../constants/Colors';

export default function Welcome() {
  return (
    <View>
      <View style={style.container}>
        <TextAC
          type="h2"
          addStyle={{
            textAlign: 'center',
          }}
        >
          Welcome to

        </TextAC>
        <TextAC
          type="h1"
          addStyle={{
            marginTop: 7,
            marginBottom: 10,
            textAlign: 'center',
          }}
        >
          Dompetku

        </TextAC>
        <Ionicons
          style={{
            textAlign: 'center',
          }}
          name="wallet"
          size={100}
          color="white"
        />
      </View>
      <TextAC
        type="primaryR"
        addStyle={{
          textAlign: 'center',
        }}
      >
        Solusi untuk pencatatan keuangan personal Anda
      </TextAC>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.accents,
    padding: 30,
    borderRadius: 30,
    width: '80%',
  },
});
