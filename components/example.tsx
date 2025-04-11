import React from "react";
import { View, Text, StyleSheet, } from "react-native";

interface Props {
    example: string
}

export default function Example({ example }: Props) {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>{example}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: "red",
    },
    text: {
        fontWeight: "bold"
    }

});