import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = () => {
  return (
    <View>
      <Text style = {styles.text}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  text: {
    color: colors.teal200
  }
})