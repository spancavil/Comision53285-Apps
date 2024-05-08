import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
// import categories from "../data/categories.json"
import Counter from "../components/Counter"
import { useGetCategoriesQuery } from "../services/shopService"

const Home = ({ route, navigation}) => {
  const {data: categories, error, isLoading} = useGetCategoriesQuery()

  // console.log(categories2);

  return (
    <View style={styles.flatListContainer}>
      {/* <Counter/> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(elemntoDeMiArray) => elemntoDeMiArray}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem 
            navigation={navigation} 
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
