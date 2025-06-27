import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Detalle } from '../screens/listas/PeliculasScreen'

export const OpPositivas = (props: Detalle) => {
    return (
        <View style={styles.container}>
            <Text> <Text style={styles.title}>Usuario: </Text>{props.detalles_usuario.usuario}</Text>
            <Text> <Text style={styles.title}>Calificación:</Text> {props.detalles_usuario.puntuacion}</Text>
            <Text> <Text style={styles.title}>Opinión:</Text>{props.opinion}</Text>
            <Text> <Text style={styles.title}>Sentimiento:</Text>{props.sentimiento}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }

})