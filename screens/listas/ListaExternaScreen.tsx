import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Tarjeta2 } from "../../components/Tarjeta2";
//interfaz generada para mi json
export interface PropsEx {
  title: string;
  data: Datum[];
}

export interface Datum {
  id: string;
  name: string;
  description: string;
  image: string;
  atributos: string[];
}

export const ListaExternaScreen = () => {
  const [datos, setDatos] = useState<PropsEx[]>();

  const leer = async () => {
    const resp = await fetch(
      "https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json"
    );
    const json = await resp.json();
    setDatos(json);
  };
  useEffect(() => {
    leer();
    /* console.log(datos); */
  }, []);

  return (
    <View>
      <Text>ListaExternaScreen</Text>
      <SectionList
        sections={datos??[]}
        renderItem={({ item }) => <Tarjeta2 {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text style={{ fontSize: 35 }}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
