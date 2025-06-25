import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalculadoraScreen } from "../screens/CalculadoraScreen";
import { IMCScreen } from "../screens/IMCScreen";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import { FormularioScreen } from "../screens/FormularioScreen";
const Stack=createStackNavigator();

const MyStack=()=>{
    return(
        <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Tab" component={MyTabs}/>
        </Stack.Navigator>
    )
}

const Tab=createBottomTabNavigator();

const MyTabs=()=>{
    return(
        <Tab.Navigator 
        initialRouteName="Formulario"
        screenOptions={{headerShown:false}}>
            <Tab.Screen name="Calculadora"
            options={{tabBarIcon:()=>(
            <Entypo name="calculator" size={24} color="black" />)}}
            component={CalculadoraScreen}/>
            <Tab.Screen name="IMC" component={IMCScreen}/>
            <Tab.Screen name="Formulario" component={FormularioScreen}/>
        </Tab.Navigator>

    )
}
//esta funcion va a tener todas mis navegaciones
export const NavegadorPrincipal=()=>{
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>

    )
}