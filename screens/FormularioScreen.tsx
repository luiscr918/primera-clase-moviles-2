import {
    Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
interface Datos {
  usuario: string;
  edad: number;
}
export const FormularioScreen = () => {
  const [usuario, serUsuario] = useState<string>("");
  const [edad, setEdad] = useState<number>(0);
  const [datos, setDatos] = useState<Datos>();
  const [visible, setVisible] = useState(false);
  const guardar = () => {
    if (usuario.trim()===""||edad===0) {
        console.log("error");
        return;   
    }
    setDatos({
      usuario: usuario.trim(),
      edad: edad,
    });
    Alert.alert("Guardado","SUS DATOS SE GUARDARON CORRECTAMENTE");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Formulario</Text>
      <TextInput
        placeholder="Ingresar usuario"
        style={styles.input}
        onChangeText={(text) => serUsuario(text)}
      />
      <TextInput
        placeholder="Ingresar edad"
        style={styles.input}
        onChangeText={(text) => setEdad(parseInt(text))}
      />
      <Button onPress={guardar} title="GUARDAR" />

      <View style={styles.linea}>
        <Switch value={visible} onValueChange={() => setVisible(!visible)} />
      </View>
      {visible && (
        <View>
          <Text style={styles.txt}>{datos?.usuario}</Text>
          <Text style={styles.txt}>{datos?.edad}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
  },
  linea: {
    borderWidth: 1,
    width: "80%",
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 30,
    backgroundColor: "#8df54d",
    width: "60%",
    margin: 10,
  },
});
