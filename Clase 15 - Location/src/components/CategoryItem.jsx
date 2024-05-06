import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"
import Card from "./Card"
import {useDispatch, useSelector} from 'react-redux'
import { setCategorySelected } from "../features/Shop/shopSlice"

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate('ItemListCategory', {category})
  }

  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={handleNavigate}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    color: colors.platinum,
    textAlign: "center",
    fontSize: 20,
  },
})
