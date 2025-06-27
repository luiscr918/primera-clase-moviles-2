import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export interface Props {
  name: Name;
  images: Images;
  gender: Gender;
  species: string;
  homePlanet?: string;
  occupation: string;
  sayings: string[];
  id: number;
  age: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export interface Images {
  "head-shot": string;
  main: string;
}

export interface Name {
  first: string;
  middle: string;
  last: string;
}

export const Tarjeta = (props: Props) => {
  const mostrarMas = (data: Props) => {
    Alert.alert(
      "Informacion",
      data.name.first + " trabaja como " + data.occupation
    );
  };
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => mostrarMas(props)}
    >
      <View style={styles.cardContainer}>
        <View style={styles.containerImg}>
          <Image
            style={styles.img}
            source={{ uri: props.images.main }}
          />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.txt}>
            {props.name.first} {props.name.last}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    padding: 35,
    backgroundColor: "#8c1c92",
  },
  containerInfo: {
    width: "100%",
    padding: 50,
    justifyContent: "center",
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
