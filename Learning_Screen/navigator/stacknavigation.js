import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Address from '../screens/AddressScreen/address'
import Showaddress from '../screens/AddressScreen/showaddress'
import BuyNowScreen from '../screens/BuyNowscreen/buyNowScreen'
import DetailScreen from '../screens/DetailScreen/detailScreen'
import SearchScreen from '../screens/SearchScreen/searchScreen'
import Tabnavigation from './tabnavigation'


const Navigationlearning = () => {
  const Stack = createNativeStackNavigator()

  return (

    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}> 
      <Stack.Screen name='TabScreen' component={Tabnavigation} />
      <Stack.Screen name='detail' component={DetailScreen} />
      <Stack.Screen name='address' component={Address} />
      <Stack.Screen name='addressview' component={Showaddress} />
      <Stack.Screen name='search' component={SearchScreen} />
      <Stack.Screen name='buynow' component={BuyNowScreen} />
    </Stack.Navigator>

  )
}

export default Navigationlearning