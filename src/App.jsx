import React from "react";
import {StyleSheet, Text, View} from "react-native";

import Welcome1 from "./components/Welcome1";

export default ()=>{
    return(
        <View style = {[style.txtG, style.Centro]}>
           
            <Welcome1/>
        </View>
        
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