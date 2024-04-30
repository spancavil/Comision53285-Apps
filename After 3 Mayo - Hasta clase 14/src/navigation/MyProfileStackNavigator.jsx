import { StyleSheet } from "react-native"
import React from "react"
import Home from "../screens/Home"
import ItemListCategory from "../screens/ItemListCategory"
import ItemDetail from "../screens/ItemDetail"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MyProfile from "../screens/MyProfile"
import ImageSelector from "../screens/ImageSelector"

const Stack = createNativeStackNavigator()

const MyProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="My profile Stack"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen component={MyProfile} name="My Profile Stack" />
            <Stack.Screen component={ImageSelector} name="Image selector" />
        </Stack.Navigator>
    )
}

export default MyProfileStackNavigator

const styles = StyleSheet.create({})
