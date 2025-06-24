import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
export const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={[{ fontSize: 50 }, styles.txt]}>LoginScreen</Text>
      <TouchableOpacity style={styles.btn}
      onPress={()=>navigation.navigate("Calculadora")}
      >
        <View style={styles.fila}>
          <Text style={styles.txt}>Ir a Calculadora</Text>
          <MaterialCommunityIcons name="calculator" size={54} color="#13e7c7" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#064141",
    flex: 1,
  },
  txt: {
    color: "#f7f8f8",
    fontSize: 30,
  },
  btn: {
    backgroundColor: "#fdb9e0",
    width: "80%",
    height: 100,
    borderRadius: 50,
    borderColor: "#080808",
    borderWidth: 3,
    alignItems: "center",
    padding:5
  },
  fila:{
    flexDirection:'row'
  }
});
