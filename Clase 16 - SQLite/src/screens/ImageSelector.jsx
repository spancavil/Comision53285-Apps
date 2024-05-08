import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ExpoLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/User/userSlice";
import AddButton from "../components/AddButton";
import { colors } from "../constants/colors";
import { useGetProfileImageQuery, usePostProfileImageMutation } from "../services/shopService";
// import { usePostProfileImageMutation } from "../Services/shopServices";
// import { saveImage } from "../Features/User/userSlice";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [isImageFromCamera, setIsImageFromCamera] = useState(false)
    const [imageURI, setImageURI] = useState("")

    const { localId } = useSelector((state) => state.auth.value)
    const { data: imageFromBase } = useGetProfileImageQuery(localId)


    const [triggerPostImage, result] = usePostProfileImageMutation()

    console.log(localId);

    const dispatch = useDispatch()

    /* const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.auth.value); */

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        return granted
    }

    const verifyGalleryPermissions = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
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

    const pickLibraryImage = async () => {
        try {
            setIsImageFromCamera(false)
            const permissionGallery = await verifyGalleryPermissions()
            if (permissionGallery) {
                const result = await ImagePicker.launchImageLibraryAsync({
                    base64: true,
                    allowsEditing: true,
                    aspect: [1,1],
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.2,
                })

                console.log(result);

                if (!result.canceled){
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    const pickImage = async () => {
        setIsImageFromCamera(true)

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
                    setImageURI(result.assets[0].uri)
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
            if (isImageFromCamera) {
                const result = await ExpoLibrary.createAssetAsync(imageURI)
            }
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

    console.log({image});

    return (
        <View style={styles.container}>
            {image || imageFromBase ? (
                <>
                    <Image source={{ uri: image || imageFromBase?.image }} style={styles.image} />
                    <AddButton title="Take another photo" onPress={pickImage} />
                    <AddButton title="Pick photo from gallery" onPress={pickLibraryImage} />
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
