import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"
import { useSelector } from "react-redux"

const ShopLayout = ({ children }) => {
    
    const isDark = useSelector(state => state.global.value.darkMode)
    const backgroundColor = isDark ? colors.teal900 : colors.teal400
    return <View style={{...styles.flatListContainer, backgroundColor}}>{children}</View>
}

export default ShopLayout

const styles = StyleSheet.create({
    flatListContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
})
