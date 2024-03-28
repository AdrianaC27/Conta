import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

export default ()=>{
    return(
        <View>
            <Image style={styles.logo} source={require('../Imagens/foxhub.png')}/>
            <Text  style={{
            display:'flex',
            fontSize:25,
           }}> Welcome Black </Text>
           <Text>Sign in to Continue</Text>

            <View>
                <Image style={styles.email} source={require('../Imagens/email.png')}/>
                <Text style={{
                    
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    
                }}>E-mail</Text>

            </View>
            <View>
                <Image style={styles.senha} source={require('../Imagens/senha.png')}/>
                <Text style={{
                    
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                
            }}>Password</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    
    logo:{

        height: 40,
        margin: 40,
        padding: 20,
    }, 
    email:{
        height: 5,
        margin:5,
        padding: 10,

    },
    
    
})
    

