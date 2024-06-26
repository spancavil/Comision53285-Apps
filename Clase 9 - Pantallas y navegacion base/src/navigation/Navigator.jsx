import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions = {
                ({route}) => (
                    {
                        header: () => {
                            return <Header title={route.name === "Home" ? "Categories" : route.name === "ItemListCategory" ? route.params.category : "Detail" }/>
                        }
                    }
                )
            }
        >
            <Stack.Screen
                component={Home}
                name='Home'
            />
            <Stack.Screen 
                component={ItemListCategory}
                name='ItemListCategory'
            />
            <Stack.Screen
                component={ItemDetail}
                name="ItemDetail"
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})