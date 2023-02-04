import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextAC from '../components/atoms/TextAC';
import Colors from '../constants/Colors';
import ButtonMC from '../components/molecules/ButtonMC';

export default function Welcome({ setIsAuthUser }) {
  return (
    <View style={style.container}>
      <View style={style.containerBox}>
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
        type="primaryM"
        addStyle={{
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 40,
          width: 300,
        }}
      >
        Solusi untuk pencatatan keuangan personal Anda
      </TextAC>
      <ButtonMC
        onPress={() => { setIsAuthUser(true); }}
        type="primary"
      >
        Mulai Sekarang
      </ButtonMC>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBox: {
    backgroundColor: Colors.accents,
    padding: 30,
    borderRadius: 30,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
