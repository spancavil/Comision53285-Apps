import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import SignupScreen from '../screens/SignupScreen'

const Navigator = () => {
  return (
    <NavigationContainer>
        <SignupScreen/>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})