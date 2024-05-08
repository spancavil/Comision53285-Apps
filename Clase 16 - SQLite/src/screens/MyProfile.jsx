import { Image, StyleSheet, View } from "react-native"
import React from "react"
import AddButton from "../components/AddButton"
import { useDispatch, useSelector } from "react-redux"
import { useGetProfileImageQuery } from "../services/shopService"
import { clearUser } from "../features/User/userSlice"

const MyProfile = ({ navigation }) => {
    /* const {localId, imageCamera} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId) */

    const dispatch = useDispatch()

    const { imageCamera, localId } = useSelector((state) => state.auth.value)
    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate("Image selector")
    }

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    const signOut = async () => {
        dispatch(clearUser())
    }

    const defaultImageRoute = "../../assets/images/defaultProfile.png"

    return (
        <View style={styles.container}>
            {imageFromBase || imageCamera ? (
                <Image
                    source={{ uri: imageFromBase?.image || imageCamera }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require(defaultImageRoute)}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton
                onPress={launchCamera}
                title={
                    imageFromBase || imageCamera
                        ? "Modify profile picture"
                        : "Add profile picture"
                }
            />
            <AddButton onPress={launchLocation} title="My address" />
            <AddButton onPress={signOut} title="Sign out" />
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
})
