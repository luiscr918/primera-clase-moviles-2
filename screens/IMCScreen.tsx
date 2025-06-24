import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export const IMCScreen = () => {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);

  const estadoImc = () => {
    let imc = peso / altura;
    let imcFinal = Math.pow(imc, 2);
    if (imcFinal < 18.49) {
      Alert.alert("IMC", "PESO BAJO: " + imcFinal);
    } else if (imcFinal > 18.49 && imcFinal < 25) {
      Alert.alert("IMC", "PESO NORMAL: " + imcFinal);
    } else if (imcFinal > 24 && imcFinal < 30) {
      Alert.alert("IMC", "SOBREPESO: " + imcFinal);
    } else if (imcFinal > 29 && imcFinal < 40) {
      Alert.alert("IMC", "OBESIDAD LEVE: " + imcFinal);
    } else {
      Alert.alert("IMC", "FURA DE RANGO: " + imcFinal);
    }
  };
  return (
    <View>
      <Text>IMC</Text>
      <Text>Por favor ingresa tu peso en kg</Text>
      <TextInput
        keyboardType="decimal-pad"
        placeholder="45kg"
        onChangeText={(valor) => setPeso(+valor)}
      />
      <Text>Por favor ingresa tu altura</Text>
      <TextInput
        keyboardType="decimal-pad"
        placeholder="44m"
        onChangeText={(valor) => setAltura(+valor)}
      />
      <Button onPress={estadoImc} title="Calcular" />
    </View>
  );
};

const styles = StyleSheet.create({});
