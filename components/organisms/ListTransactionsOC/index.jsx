import { View } from 'react-native';
import React from 'react';
import CardTransactionsMC from '../../molecules/CardTransactionsMC';

export default function ListTrasactionsOC({ data = [] }) {
  function RenderTrasactions() {
    return data.map((val) => (
      <CardTransactionsMC
        key={val.id}
        type={val.type}
        date={val.date}
        title={val.title}
        category={val.category}
        source={val.source}
        total={val.total}
      />
    ));
  }
  return (
    <View style={{ paddingBottom: 50 }}>
      <RenderTrasactions />
    </View>
  );
}
