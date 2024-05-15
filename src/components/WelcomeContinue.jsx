import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import { Button} from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';

export default props=>{
    return(
        <View>
            <Image style={styles.logo} source={require('../Imagens/foxhub.png')}/>
            <Text  style={{
            display:'flex',
            fontSize:25,
           }}> Welcome Black </Text>
           <Text>Sign up to Continue</Text>

            <View>
                <Image style={styles.name} source={require('../Imagens/pessoa.png')}/>
                <Text style={{
                    
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    
                }}>Name</Text>

            </View>
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

            <Button style ={{
                    backgroundColor:'#10439F',
                    margin:20
                }}onPress={()=> props.navigation.navigate('Welcome1')} textColor="white">
                    Sign in        

                </Button>

                <View>
                   

                <Button style={{
                    backgroundColor:'#CAF4FF',
                    margin:20
                }}>
                    Sign in with   
                    {<Icon name="facebook-square" size={20} />}
                 

                </Button>
                <Button style={{
                    backgroundColor:'#CAF4FF',                    
                    margin:20,
                  
                    }}>
                    Sign in with   
                    
                    {<Icon name="google" size={20} />}

                </Button>
                </View>

                <View>
                    <Text style={{
                        height: 40,
                        
                        margin: 12,
                  
                       
                        

                    }}> OR</Text>

            
                </View>
                <View>
                    <Text>Already have an account? SIGN UP</Text>
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
    name:{
        height: 5,
        margin:5,
        padding: 10,

    },
    imagem:{
        height: 5,
        margin:5,
        padding: 10,

    },
    button:{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    }
    
    
})
    

