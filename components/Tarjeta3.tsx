import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Pelicula } from "../screens/listas/PeliculasScreen";
import { FlatList } from "react-native-gesture-handler";

export const Tarjeta3 = (props: Pelicula) => {

  const [visible, setVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image style={styles.img} source={{ uri: props.imagen }} />
        <Text style={styles.mainTitle}>Title: {props.titulo}</Text>
        <Text style={styles.mainTitle}>Director: {props.director}</Text>
        <Button onPress={()=>setVisible(!visible)} title="Ver mas" />
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modal}>
          <Button title="CERRAR" onPress={() => setVisible(!visible)} />
          <FlatList
            data={[props]}
            renderItem={({ item }) => (
              <View
                style={{ alignContent: "center", justifyContent: "center" }}
              >
                <Text>{item.descripcion}</Text>
                <Image style={styles.img} source={{ uri: item.imagen }} />
                <Text>{item.anio}</Text>
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    modal: {
    backgroundColor: "rgba(255,255,255,0.97)",
    margin: 30,
    borderRadius: 20,
    padding: 24,
    flex: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    minHeight: 300,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  card: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#acecdb",
    padding: 15,
    borderRadius: 30,
  },
  img: {
    height: 400,
    width: 300,
    resizeMode: "contain",
  },
});
