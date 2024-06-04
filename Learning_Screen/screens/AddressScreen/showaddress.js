import { View, Text, ScrollView, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { styleadd } from './styleadd'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useSelector } from 'react-redux'

const Showaddress = () => {
    const navigation = useNavigation()
    const address = useSelector(state => state?.demo?.demoValue)
    console.log(address) 
   
  return (
    <View style={styleadd.main}>
         <View style={styleadd.headerview}>
          <TouchableOpacity style={styleadd.btnback} onPress={() => navigation.goBack()}>
            <ArrowLeft weight='bold' size={32} />
          </TouchableOpacity>
          <Text style={styleadd.txtadddil}>My addresses</Text>
        </View>
        <Pressable onPress={()=>navigation.navigate('address')} style={styleadd.addaddress}>
            <Text  style={styleadd.txtaddaddress}>+ Add a new address</Text>
        </Pressable>
        <FlatList
        data={address}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>(
            <View style={styleadd.mainitemview}>
                <View style={styleadd.itemview}>
                <View style={styleadd.viewnametype}>
                <Text style={styleadd.textname}>{item.name}</Text>
                <Text style={styleadd.txttype}>{item?.type??{}}</Text>
                </View>
                <Text style={styleadd.fulladd}>{item.housedetail},{item.colony}{`\n`}{item.city}{`\n`}{item.state}-{item.pincode}{`\n`}{`\n`}{item.number}</Text>
                </View>
            </View>
            
        )}
        />
    </View>
  )
}

export default Showaddress