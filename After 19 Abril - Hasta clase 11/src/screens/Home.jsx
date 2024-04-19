import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"
import Counter from "../components/Counter"
import ShopLayout from "../components/ShopLayout"

const Home = ({ route, navigation}) => {
  return (
    <ShopLayout>
      <Counter/>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(elemntoDeMiArray) => elemntoDeMiArray}
        data={categories.sort()}
        renderItem={({ item }) => (
          <CategoryItem 
            navigation={navigation} 
            category={item} 
          />
        )}
      />
    </ShopLayout>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.teal400,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
})
