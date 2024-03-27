import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';

const CategoryItem = ({category}) => {
  return (
    <View style = {styles.categoryContainer}>
      <Text style = {styles.text}>{category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryContainer: {
        height: 40,
        //Full width
        width: Dimensions.get('screen').width
    },
    text: {
        color: colors.teal200,
    }
})