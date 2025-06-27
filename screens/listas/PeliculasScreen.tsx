import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Tarjeta3 } from "../../components/Tarjeta3";

export interface PropsPelicula {
  peliculas: Pelicula[];
}

export interface Pelicula {
  id: string;
  titulo: string;
  genero: string[];
  director: string;
  precio: Precio;
  lanzamiento: string;
  anio: number;
  descripcion: string;
  imagen: string;
  valoracion: number;
  opiniones: Opiniones;
}

export interface Opiniones {
  opiniones_positivas: OpinionesTivas;
  opiniones_negativas: OpinionesTivas;
}

export interface OpinionesTivas {
  cantidad: number;
  detalles: Detalle[];
}

export interface Detalle {
  opinion: string;
  sentimiento: Sentimiento;
  detalles_usuario: DetallesUsuario;
}

export interface DetallesUsuario {
  usuario: string;
  fecha: Date;
  puntuacion: number;
}

export enum Sentimiento {
  Negativo = "negativo",
  Positivo = "positivo",
}

export interface Precio {
  moneda: Moneda;
  real: number;
}

export enum Moneda {
  Usd = "USD",
}

export const PeliculasScreen = () => {
  const [datos, setDatos] = useState<Pelicula[]>();

  //LLAMADO A LA API
  const leer = async () => {
    const resp = await fetch(
      "https://jritsqmet.github.io/web-api/peliculas3.json"
    );
    const json = await resp.json();
    // Si el JSON es { peliculas: Pelicula[] }
    setDatos(json.peliculas);
  };
  useEffect(() => {
    leer();
    /* console.log(datos); */
  }, []);

  return (
    <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Lista de Peliculas</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => <Tarjeta3 {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
        mainTitle:{
        fontSize:40,
        fontWeight:'bold'
    },
      mainContainer: {
        alignItems:'center'
  },
});
