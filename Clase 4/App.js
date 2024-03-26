import { View, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";

const taskExample = [
    { id: 1, value: "Pasear perro" },
    { id: 2, value: "Comprar comida" },
    { id: 3, value: "Sacar basura" }
]

const App = () => {

    const [textItem, setTextItem] = useState("")
    const [itemList, setItemList] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState({})

    const handleChangeText = (text) => setTextItem(text)


    const addItem = () => {
        setItemList(currentValue => [
            ...currentValue,
            { id: Math.random().toString(), value: textItem }
        ])
        setTextItem("")
    }

    const handleModal = (item) => {
        setItemSelected(item)
        setModalVisible(true)
    }

    const handleDelete = () => {
        const filter = itemList.filter(task => task !== itemSelected)
        setItemList(filter)
        setModalVisible(false)
    }

    const handleCancelModal = () => {
        setModalVisible(false)
        setItemSelected({})
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChangeText}
                    value={textItem}
                />
                <Button title="ADD" color="#5555ff" onPress={addItem} />
            </View>

            <View style={styles.taskContainer}>

                <FlatList
                    style={styles.flatlist}
                    data={itemList}
                    keyExtractor={task => task.id.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => handleModal(item)}
                        >
                            <Text style={styles.taskText}>{item.value}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalStyles}>
                    <View style={styles.modalContainer}>
                        <View style={styles.textContainer}>
                            <Text>Estas seguro que queres borrar:</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textModal}>{itemSelected.value}</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <Button title="Borrar" onPress={handleDelete} />
                            <Button title="Cancelar" onPress={handleCancelModal} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: "center",
        backgroundColor: "#888888",
        flex: 1
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: 250,
        fontSize: 16
    },
    taskContainer: {
        marginTop: 15,
        alignItems: "center",
        width: "100%",
        paddingVertical: 10
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cccccc",
        width: "100%",
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 5
    },
    taskText: {
        fontWeight: "bold",
        fontSize: 16
    },
    flatlist: {
        width: "90%",
    },
    modalStyles: {
        backgroundColor: "#cccccc88",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalContainer: {
        backgroundColor: "white",
        width: "80%",
        alignItems: "center",
        gap: 20,
        paddingVertical: 20,
        borderRadius: 7
    },
    textContainer: {
        
    },
    btnContainer: {
        flexDirection: "row",
        gap: 20
    },
    textModal: {
        fontWeight: "bold"
    }
})