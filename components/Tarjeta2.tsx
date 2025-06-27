import {
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Datum } from "../screens/listas/ListaExternaScreen";

export const Tarjeta2 = (props: Datum) => {
  /*     console.log(props.data); */
  const [visible, setVisible] = useState(false);
  const mostrarModal = () => {
    setVisible(!visible)
  }
  return (
    <View>
      <TouchableOpacity
        onPress={mostrarModal}
        style={{ alignItems: "center" }}
      >
        <Text style={{ fontSize: 25 }}>{props.name}</Text>
        <Image style={styles.img} source={{ uri: props.image }} />
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modal}>
          <Button title="CERRAR" onPress={() => setVisible(!visible)} />
          <FlatList
            data={[props]}
            renderItem={({ item }) =>
              <View style={{ alignContent: 'center',justifyContent:'center' }}>
                <Text>{item.name}</Text>
                <Image
                  style={styles.img}
                  source={{ uri: item.image }}
                />
                <Text>{item.description}</Text>
              </View>
            }
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
  img: {
    height: 100,
    width: 80,
    resizeMode: "contain",
  },
});
