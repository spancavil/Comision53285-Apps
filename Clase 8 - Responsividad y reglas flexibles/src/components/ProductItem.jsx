import { Image, StyleSheet, Text, Pressable } from "react-native"
import React from "react"
import Card from "./Card"
import { colors } from "../constants/colors"

const ProductItem = ({
  product,
  setProductSelected = () => {},
  setItemIdSelected = () => {},
}) => {
  // const {height, width } = useWindowDimensions()

  // console.log(height, width);
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable style={styles.pressable} onPress ={()=> setItemIdSelected(product.id)}>
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: "30%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 120,
    width: 300,
    margin: 10,
  },
  textCategory: {
    width: "70%",
    color: colors.teal200,
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
})
