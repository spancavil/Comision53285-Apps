import { StyleSheet, Text, View, Modal, Button } from "react-native"
import React from "react"
import { colors } from "../../constants/colors"

const ModalCustom = ({
  modalVisible,
  itemSelected,
  handleCancelModal,
  handleDelete,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalStyles}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text>Confirm remove task:</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textModal}>{itemSelected.value}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Remove" onPress={handleDelete} />
            <Button title="Cancel" onPress={handleCancelModal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalCustom

const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: colors.purple,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 7,
  },

  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontWeight: "bold",
  },
  textContainer: {},
})
