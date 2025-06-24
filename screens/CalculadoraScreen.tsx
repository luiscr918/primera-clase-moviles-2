import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export const  CalculadoraScreen=()=> {
    const [num1, setNum1] = useState<number>(0);
    const menos=()=>{
        setNum1(num1-1);
    }
    const [num2, setNum2] = useState<number>(0);
useEffect(() => {
    if (num1<=-5) {
        setNum1(-5);
    }
    if (num1>=5) {
        setNum1(5);
    }
    if (num2<=-5) {
        setNum2(-5);
    }
    if (num2>=5) {
        setNum2(5);
    }
    
}, [num1,num2])


    const limpiar=()=>{
        setNum1(0);
        setNum2(0);
    }
    const funcionsuma=()=>{
        let respuesta=(num1+num2);
        Alert.alert("Resulatado","El resultado es: "+respuesta,[
            {
                text:"Borrar",
                onPress:()=>limpiar()
            },
            {
                text:"Continuar"
            }
        ]
    )}
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Calculadora</Text>
    <View style={styles.fila}>
      <Button
      onPress={menos}
      title='-'
      />
        <Text style={{fontSize:40}}>  {num1} </Text>
      <Button
      onPress={()=>setNum1(num1+1)}
      title='+'
      />
    </View>
    <View style={styles.fila}>
        <Button
        title='-'
        onPress={()=>setNum2(num2-1)}
        color={'green'}
        />
        <Text>  {num2}  </Text>
        <Button
        title='+'
        onPress={()=>setNum2(num2+1)}
        color={'green'}
        />
    </View>
    <View style={styles.linea}></View>
<View>
    <TouchableOpacity style={styles.btnSuma}
    onPress={funcionsuma}
    >
        <Text style={{fontSize:25,color:'#ebebeb'}}>Calcular Suma</Text>
    </TouchableOpacity>
    
</View>
    </View>
  )
}

const styles = StyleSheet.create({

    fila:{
        flexDirection:'row'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    linea:{

    },
    btnSuma:{
        backgroundColor:'#04224d',

    }
})