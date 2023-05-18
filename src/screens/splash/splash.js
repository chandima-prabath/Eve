import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {View,Image,} from 'react-native';

function Splash (){

    const [isGo,setIsGo]=useState(true);
    const Navigation=useNavigation();

    useEffect(()=>{
        if(isGo == true){
            setTimeout((()=>{
                Navigation.navigate("Login");
                setIsGo(false);
            }),2000)
        }
    })

    return (
        <View style={{felx:1,alignItems:"center",justifyContent:"center",height:"100%"}}>
            <Image style={{width:200,height:200,borderRadius:80}} source={require("../../assets/images/eve.jpg")}/>
        </View>
    )
}

export default Splash;