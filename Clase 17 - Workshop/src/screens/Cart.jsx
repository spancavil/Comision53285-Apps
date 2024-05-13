import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
// import CartData from "../data/cart.json"
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
// import { useSelector } from "react-redux"
// import { usePostOrderMutation } from "../services/shopService"

const Cart = () => {
    // console.log(CartData);

    const {items: CartData, total} = useSelector(state => state.cart.value)

    const [triggerPostOrder, result] = usePostOrderMutation()
    /* const { items: cartItems, total } = useSelector((state) => state.cart.value)
    const [triggerPost, result] = usePostOrderMutation()

    console.log(cartItems)
    console.log(result) */

    /* let total = 0
    for (const currentItem of CartData) {
        console.log(currentItem.id);
        total += currentItem.price * currentItem.quantity
    } */

    /* onConfirm = () => {
        triggerPost({
            total,
            items: cartItems,
            user: "userLoggedId",
            date: new Date().toLocaleString(),
        })
    } */

    const onConfirmOrder = () => {
        triggerPostOrder({items: CartData, user: 'Rafael', total})
    }

    console.log(result);

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                keyExtractor={(pepe) => pepe.id}
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />
                }}
            />
            <View style={styles.totalContainer}>
                <Pressable onPress={onConfirmOrder}>
                    <Text>Confirm</Text>
                </Pressable>
                <Text>Total: ${total}</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 120,
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})