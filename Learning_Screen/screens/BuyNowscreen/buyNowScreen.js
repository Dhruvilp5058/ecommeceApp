import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const BuyNowScreen = () => {
  const cart = useSelector(state=>state.demo.buynow)
  console.log('BuyNow SCreen>>>>>>>>>s',cart)
  return (
    <View>
      <Text>BuyNowScreen</Text>
    </View>
  )
}

export default BuyNowScreen