import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"
import ItemListCategory from "./src/screens/ItemListCategory"
import { useState } from "react"
import { useFonts } from "expo-font"
import ItemDetail from "./src/screens/ItemDetail"

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  const [categorySelected, setCategorySelected] = useState("")

  if (!fontsLoaded || fontError) {
    return null
  }

  if (fontsLoaded && !fontError) {
    return (
      <View style={styles.container}>
        <Header title={"Titulo de la app"} />
        {!categorySelected ? (
          <Home setCategorySelected={setCategorySelected} />
        ) : (
          <ItemListCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    flex: 1,
    // alignItems: "center",
    backgroundColor: colors.teal200,
  },
})

export default App
