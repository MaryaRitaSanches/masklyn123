import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props{
    title: string
    onPress: () => void
}

export default function Form({title}: Props){
    return(
        <TouchableOpacity style= {styles.botão}>
        <Text style= {styles.texto}>{title}</Text>
       </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    botão: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius:5
    },
    texto:{
        color: "white",
        textAlign: "center"
    }
})
