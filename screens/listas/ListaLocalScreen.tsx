import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import datos from '../../assets/data/futurama.json'
import { Tarjeta } from "../../components/Tarjeta";
export const ListaLocalScreen = () => {

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Flat List lista local</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => (
            <Tarjeta informacion={item}                                          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});
