import { StyleSheet, TextInput, Button, View } from "react-native"
import React from "react"
import { colors } from "../../constants/colors"

const TaskInput = ({textItem, addItem, handleChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={textItem}
        placeholder={"Clean the house..."}
      />
      <Button title="ADD" color="#5555ff" onPress={addItem} />
    </View>
  )
}

export default TaskInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
    },
    input: {
        borderBottomWidth: 1,
        backgroundColor: colors.darkSalmon,
        borderBottomColor: "black",
        width: 240,
        fontSize: 16,
        height: 35,
        paddingHorizontal: 5,
    },
})
