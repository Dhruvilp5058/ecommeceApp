import { View, Text } from 'react-native'
import React from 'react'

const Demo = () => {
    const cartItems = useSelector(state => state?.demo?.addCart);
  return (
    <View>
      <Text>Demo</Text>
    </View>
  )
}

export default Demo