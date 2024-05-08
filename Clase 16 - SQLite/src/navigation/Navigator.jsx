import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'

const Navigator = () => {
  
  const {user} = useSelector(state => state.auth.value)
  return (
    <NavigationContainer>
        {user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})