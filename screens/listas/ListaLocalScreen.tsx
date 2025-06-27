import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import datos from '../../assets/data/futurama.json'
import { Tarjeta, Props } from '../../components/Tarjeta';

const datitos:Props[]=datos as Props[];
export const ListaLocalScreen = () => {

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Flat List lista local</Text>
      <FlatList
        data={datitos}
        renderItem={({ item }) => (
            <Tarjeta {...item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});
