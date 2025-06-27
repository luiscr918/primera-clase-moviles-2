import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pelicula } from '../screens/listas/PeliculasScreen'
import { OpPositivas } from './OpPositivas'
import { OpNegativas } from './OpNegativas'

export const ModalPelicula = (props: Pelicula) => {
    return (
        <View>
            <View style={{margin:5}}>
                <Text style={{ fontSize: 15 }}>La pelicula <Text style={{ fontSize: 15, fontWeight: 'bold' }}> {props.titulo}</Text> trata de {props.descripcion}</Text>
            </View>
            <Image style={styles.img2} source={{ uri: props.imagen }} />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Opiniones Positivas</Text>
            <FlatList
                data={props.opiniones.opiniones_positivas.detalles}
                renderItem={({ item }) => <OpPositivas {...item} />}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Opiniones Negativas</Text>
            <FlatList
                data={props.opiniones.opiniones_negativas.detalles}
                renderItem={({ item }) => <OpNegativas {...item} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    img2: {
        height: 120,
        width: 90,
        resizeMode: "contain",
        borderRadius: 12,
        marginVertical: 12,
    },
})