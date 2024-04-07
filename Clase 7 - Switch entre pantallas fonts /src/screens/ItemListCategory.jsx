import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import products from "../data/products.json"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"

const ItemListCategory = ({categorySelected = "", setCategorySelected = ()=> {}}) => {
  // console.log(products);
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  console.log(categorySelected);

  useEffect(()=> {
    //Products filtered by category

    regex= /\d/
    const hasDigits = (regex.test(keyWord))
    console.log(hasDigits);
    if (hasDigits) {
      setError("Don't use digits")
      return
    }
    const productsPrefiltered = products.filter(product => product.category === categorySelected)
    //Product filtered by name
    const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
    setProductsFiltered(productsFilter)
    setError("")
  }, [keyWord, categorySelected])

  return (
    <View style={styles.flatListContainer}>
      <Search error = {error} onSearch={setKeyword} goBack={()=> setCategorySelected("")}/>
      <FlatList
        data = {productsFiltered}
        renderItem = {({item})=> <ProductItem product={item}/>}
        keyExtractor = {(producto) => producto.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.teal400,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
})