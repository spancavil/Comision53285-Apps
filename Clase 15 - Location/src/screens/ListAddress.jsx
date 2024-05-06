import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "../components/AddButton";
/* import AddressItem from '../Components/AddressItem'
import { useGetUserLocationQuery } from "../Services/shopServices"; */

const ListAddress = ({ navigation }) => {
    /* const { location, localId } = useSelector((state) => state.userReducer.value);
    const {data: userLocationQuery, isError, isLoading} = useGetUserLocationQuery(localId) */

/*     console.log(userLocationQuery);

    let locationQueryFormatted = {
        location: userLocationQuery
    } */

    /* return location?.latitude || userLocationQuery ? (
        <AddressItem 
            location={location.latitude ? location : userLocationQuery} 
            navigation={navigation} 
        />
    ) : ( */
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>No location set</Text>
            <AddButton
                title="Set location"
                onPress={() => navigation.navigate("Location Selector")}
            />
        </View>
    )
    // );
};

export default ListAddress;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        paddingVertical: 20,
        fontFamily: 'Josefin',
        fontSize: 18
    }
});
