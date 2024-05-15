import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/AntDesign';


import Welcome1 from "./components/Welcome1";
import WelcomeContinue from "./components/WelcomeContinue";
import { Button } from "react-native-paper";
const Stack = createNativeStackNavigator()

export default  props=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome1"
            screenOptions={
                { headerStyle:{
                    backgroundColor:'white',
                    
                },
                headerTitle:''

                }
            }>

                <Stack.Screen name="WelcomeContinue"
                component={WelcomeContinue}
                options={({navigation}) => {

                    return{
                        headerRight:()=>(
                            <Button
                            onPress={()=>navigation.navigate("Welcome1")}/>
                        )
                    }
                }
            }
                
                />
                <Stack.Screen
                name="Welcome1"
                component={Welcome1}/>
            

            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            backgroundColor:'white',
        },
        Centro:{
            color:'white',
            fontFamily:'Arial',

        },
    }
)