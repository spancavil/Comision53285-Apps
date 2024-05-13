import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const Header = ({route}) => {

  const categorySelected = useSelector(state => state.shop.value.categorySelected)

  const {height, width} = useWindowDimensions()
  return (
    <View style = {styles.container}>
      <Text style = {width > 360 ? styles.text: styles.textSm}>{route.name}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: colors.teal900,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.teal200,
    fontFamily: 'Josefin',
    fontSize: 22
  },
  textSm: {
    color: colors.teal200,
    fontFamily: 'Josefin',
    fontSize: 16
  }
})