import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('address')} style={{borderWidth:1,paddingVertical:20,backgroundColor:'lighyellow'}}>
      <Text  style={{color:'black',fontSize:20}}>Add Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('addressview')} style={{borderWidth:1,paddingVertical:20,backgroundColor:'lighyellow'}}>
      <Text  style={{color:'black',fontSize:20}}>show address</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Profile