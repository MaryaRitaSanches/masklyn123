import React, { useState } from "react";
import { Button, Text, StyleSheet, TextInput, View } from "react-native"

export default function Form() {
    const [exibir, setExibir] = useState(false);



    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    function exibirTexto() {
        return (
            <View>ss
                <Text style={styles.text1}>{text1}</Text>
                <Text style={styles.text2}>{text2}</Text>
                <Text style={styles.text3}>{text3}</Text>
            </View>
        )
    }
    return (

        <View>
            <TextInput placeholder="texto1" onChangeText={setText1} />
            <TextInput placeholder="texto2" onChangeText={setText2} />
            <TextInput placeholder="texto3" onChangeText={setText3} />

            <Button title="Exibir" onPress={() => { setExibir(true) }} />

            {exibir ? exibirTexto() : ''}
        </View>
    )
}
const styles = StyleSheet.create({
    text1: {
        color: 'red'
    },

    text2: {
        color: 'green'
    },

    text3: {
        color: 'blue'
    }
});
