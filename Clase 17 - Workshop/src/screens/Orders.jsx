import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import OrderData from '../data/orders.json'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'

const OrderScreen = () => {

  const {localId} = useSelector(state => state.auth.value)
  const {data: orders, isSuccess} = useGetOrdersQuery(localId)
  const [ordersFiltered, setOrdersFiltered] = useState()

  useEffect(()=> {
    if (isSuccess) {
      const responseTransformed = Object.values(orders)
      console.log({localId});
      const ordersFiltered = responseTransformed.filter(order => order.user === localId)
      setOrdersFiltered(ordersFiltered)
    }
  }, [orders, isSuccess, localId])

  console.log({ordersFiltered});

  return (
    <View>
        <FlatList
            data={ordersFiltered}
            renderItem={({item}) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})