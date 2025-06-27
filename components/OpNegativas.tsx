import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Detalle } from '../screens/listas/PeliculasScreen'

export const OpNegativas = (props: Detalle) => {
    return (
        <View>
            <Text>USUARIO: {props.detalles_usuario.usuario}</Text>
            <Text>OPINION:{props.opinion}</Text>
            <Text>Sentimiento:{props.sentimiento}</Text>
        </View>
    )
}



const styles = StyleSheet.create({})