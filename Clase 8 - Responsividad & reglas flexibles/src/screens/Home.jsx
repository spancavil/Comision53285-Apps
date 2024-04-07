import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(elemntoDeMiArray) => elemntoDeMiArray}
        data={categories.sort()}
        renderItem={({ item }) => (
          <CategoryItem 
            selectCategory={setCategorySelected} 
            category={item} 
          />
        )}
      />
    </View>
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
