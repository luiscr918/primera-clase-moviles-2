import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export const Tarjeta = (props: any) => {
  const mostrarMas = (data: any) => {
    Alert.alert(
      "Informacion",
      data.name.first + " trabaja como " + data.occupation
    );
  };
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => mostrarMas(props.informacion)}
    >
      <View style={styles.cardContainer}>
        <View style={styles.containerImg}>
          <Image
            style={styles.img}
            source={{ uri: props.informacion.images.main }}
            
          />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.txt}>
            {props.informacion.name.first} {props.informacion.name.last}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    containerImg:{
        padding:35,
        backgroundColor:'#8c1c92'
    },
    containerInfo:{
        width:'100%',
        padding:50,
        justifyContent:'center',
    },
  cardContainer: {
    flexDirection: "row",
    alignContent: "space-evenly",
  },
  btn: {
    backgroundColor: "#09a509",
    margin: 5,
  },
  img: {
    height: 80,
    width: 50,
    resizeMode: "contain",
  },
  txt: {
    fontSize: 20,
  },
});
