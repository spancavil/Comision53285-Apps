import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(null);
    let count = 0

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={()=> {}}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable 
                    style={styles.button}
                    onPress={()=> {}}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder="Cantidad a aumentar"
                    style={styles.spanInput}
                    onChangeText={setInputToAdd}
                    value={inputToAdd}
                />
                <Pressable 
                    style={styles.button}
                    onPress={()=> {}}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.teal200,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: colors.platinum,
    },
    span: {
        backgroundColor: colors.teal900,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        color: colors.platinum
    },
    spanInput: {
        backgroundColor: colors.teal900,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
        color: colors.platinum
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Josefin",
    },
});
