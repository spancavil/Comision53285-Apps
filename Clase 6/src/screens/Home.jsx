import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"

const Home = () => {
  return (
    <View style={styles.flatListContainer}>
      {/* Flatlist for render categories */}
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
  },
})
