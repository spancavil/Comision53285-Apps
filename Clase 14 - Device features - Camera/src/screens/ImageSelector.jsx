import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/User/userSlice";
import AddButton from "../components/AddButton";
import { colors } from "../constants/colors";
import { usePostProfileImageMutation } from "../services/shopService";
// import { usePostProfileImageMutation } from "../Services/shopServices";
// import { saveImage } from "../Features/User/userSlice";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const [triggerPostImage, result] = usePostProfileImageMutation()

    const {localId} = useSelector(state => state.auth.value)

    console.log(localId);

    const dispatch = useDispatch()

    /* const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.auth.value); */

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        return granted
    }
    /* const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };
 */
    const pickImage = async () => {

        try {
            const permissionCamera = await verifyCameraPermissions()
            
            if (permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2    
                })
                /* console.log(result);
                console.log(result.assets[0].base64.length) */
                if (!result.canceled){
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
            
        } catch (error) {
            console.log(error);
        }

        /* //Permission for camera
        const isCameraOk = await verifyCameraPermissions();

        if (isCameraOk) {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
                quality: 0.1,
            });

            if (!result.canceled) {
                // console.log(result.assets[0].base64.length);
                const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                setImage(image)
            }
        } */
    };
    
    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image))
            triggerPostImage({image, localId})
            navigation.goBack()
        } catch (error) {
            console.log(error);
        }
        /* try {
            dispatch(setCameraImage(image));
            triggerSaveImage({image, localId})
        } catch (error) {
            console.log(error);
        }
        navigation.goBack(); */
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Take another photo" onPress={pickImage} />
                    <AddButton title="Confirm photo" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No photo to show...</Text>
                    </View>
                    <AddButton title="Take a photo" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.platinum,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
