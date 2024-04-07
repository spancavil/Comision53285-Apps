import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import allProducts from "../data/products.json"

const ItemDetail = ({ idSelected, setProductSelected }) => {
  console.log(idSelected)

  const [product, setProduct] = useState(null)
/*   const [orientation, setOrientation] = useState("portrait")
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

  console.log(orientation) */

  useEffect(() => {
    //Encontrar el producto por su id
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    )
    setProduct(productSelected)
  }, [idSelected])

  console.log(product)

  return (
    <View>
      <Button onPress={() => setProductSelected("")} title="Go back" />
      {product ? (
        <View
          style={
            // orientation === "portrait"?
            styles.mainContainer
            //   : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Button title="Add cart"></Button>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  image: {
    width: '100%',
    height: 250,
  },
  textContainer: {
    flexDirection: "column",
  },
})
