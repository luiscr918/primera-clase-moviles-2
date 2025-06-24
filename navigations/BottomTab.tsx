import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { CalculadoraScreen } from "../screens/CalculadoraScreen";
import { NavigationContainer } from "@react-navigation/native";
import {IMCScreen} from "../screens/IMCScreen";
const Tab = createBottomTabNavigator();

 const MyTab = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
       name="Welcome" 
       component={WelcomeScreen} 
       options={{headerShown:false}}
       />
      <Tab.Screen
       name="Login"
        component={LoginScreen} />
      <Tab.Screen 
      name="Calculadora" 
      component={CalculadoraScreen} />
      <Tab.Screen
      name="IMC"
      component={IMCScreen}/>
    </Tab.Navigator>
  );
};
 export const  NavegadorBottom=()=>{
    return(
        <NavigationContainer>
        <MyTab/>
        </NavigationContainer>
    )
}
