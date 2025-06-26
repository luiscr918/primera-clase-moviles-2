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

export const Tarjeta2 = (props: any) => {
  /*     console.log(props.data); */
  const [visible, setVisible] = useState(false);
const mostrarModal=()=>{
    setVisible(!visible)
}
  return (
    <View>
      <TouchableOpacity
        onPress={mostrarModal}
        style={{ alignItems: "center" }}
      >
        <Text style={{ fontSize: 25 }}>{props.data.name}</Text>
        <Image style={styles.img} source={{ uri: props.data.image }} />
      </TouchableOpacity>
      <Modal visible={visible}>
        <View style={styles.modal}>
          <Button title="CERRAR" onPress={() => setVisible(!visible)} />
            <Text>Informacion del personaje</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#11c092",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  img: {
    height: 100,
    width: 80,
    resizeMode: "contain",
  },
});
