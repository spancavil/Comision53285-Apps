import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"
import ItemListCategory from "./src/screens/ItemListCategory"
import { useState } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react"

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Josefin': require('./assets/JosefinSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [categorySelected, setCategorySelected] = useState("")
  console.log(categorySelected)

  return (
    <View style={styles.container}>
      <Header title={"Titulo de la app"} />
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
        ) : (
        <ItemListCategory categorySelected={categorySelected} setCategorySelected ={setCategorySelected}/>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.teal200,
  },
})

export default App
