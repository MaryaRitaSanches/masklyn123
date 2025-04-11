import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import React, { useState } from "react";
import { Button, Text, TextInput, TextInputBase, View } from "react-native";

export default function HomeScreen(){
    const name = "Sanches";
    const name2 = "";
    const name3 = "";
    const [count,setCount] = useState(0);
    const [nome, setNome] = useState (name);
    const [sobrenome, setSobrenome] = useState (name2);
    const [email , setEmail] = useState (name3);
     
    function Exibir (){
        return(
           <Text>Este é o seu nome: {name} {name2} e esse é o seu email {name3}</Text>
        )
    }
    

    return (
        <View style= {{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Text>Bem-Vindo ao meu App, {nome}!</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={()=> {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={()=> {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={()=> {setCount(count - count)}}/>

            

            <CustomButton title="Botão Roxo" onPress ={() => {setNome('Marya ' + count)}}/>

            <TextInput placeholder="Digite seu nome:" onChangeText={setNome}/>
            <TextInput placeholder="Digite seu sobrenome:" onChangeText={setSobrenome}/>
            <TextInput placeholder="Digite seu email:" onChangeText={setEmail}/>

            <Form  title="Exibir dados" onPress ={() => {Exibir}}/>
            
        </View>
    );
}