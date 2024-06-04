import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, Buildings, House } from 'phosphor-react-native'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'
import TextinputAdress from './TextinputAdress/TextinputAdress'
import { useDispatch, useSelector } from 'react-redux'
import { addressdemo } from '../../../src/Redux/Slice/demoSlice'

const Address = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [selected, setSelected] = useState('')

  const isselected = (type) => {
    setSelected(type === selected ? '' : type)
  }
  const [idCounter, setIdCounter] = useState(0);
  const [address, setAdress] = useState({
    name: '',
    number: '',
    pincode: '',
    state: '',
    housedetail: '',
    colony: '',
    city: ''
  })
  const addresss = useSelector(state => state?.demo?.demoValue)
  console.log(addresss)
  const saveaddress = () => {
    const newId = addresss.length > 0 ? Math.max(...addresss.map(address => address.id)) + 1 : 1;
    const addressdata = { ...address, id: newId, type: selected };
    dispatch(addressdemo(addressdata));
    navigation.navigate('addressview');
  };
  const handleChange = (name, value) => {
    setAdress(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  return (
    <View style={style.main}>
      <View style={style.headerview}>
        <TouchableOpacity style={style.btnback} onPress={() => navigation.goBack()}>
          <ArrowLeft weight='bold' size={32} />
        </TouchableOpacity>
        <Text style={style.txtadddil}>Add delivery address</Text>
      </View>
      <ScrollView>

        <TextinputAdress label={'Full Name (Required)'}
          value={address.name} onChangeText={(text) => handleChange('name', text)} />
        <TextinputAdress label={'Phone Number (Required)'}
          value={address.number} onChangeText={(text) => handleChange('number', text)} />
        <TextinputAdress label={'Pincide (Required)'}
          value={address.pincode} onChangeText={(text) => handleChange('pincode', text)} />
        <TextinputAdress label={'State (Required)'}
          value={address.state} onChangeText={(text) => handleChange('state', text)} />
        <TextinputAdress label={'city (Required)'}
          value={address.city} onChangeText={(text) => handleChange('city', text)} />
        <TextinputAdress label={'House No , building Name  (Required)'}
          value={address.housedetail} onChangeText={(text) => handleChange('housedetail', text)} />
        <TextinputAdress label={'Road name , Area , colony (Required)'}
          value={address.colony} onChangeText={(text) => handleChange('colony', text)} />
        <View style={style.viewbtnmain}>
          <Text>Type Of Address</Text>
          <View style={style.viewbtn}>
            <TouchableOpacity
              style={[{ backgroundColor: selected === 'home' ? 'lightyellow' : 'white' }, style.btnhomne]}
              onPress={() => isselected('home')}>
              <House size={25} weight='fill' />
              <Text style={style.txthomne}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[{ backgroundColor: selected === 'work' ? 'lightyellow' : 'white' }, style.btnwork]}
              onPress={() => isselected('work')}>
              <Buildings size={25} />
              <Text style={style.txtwork}>Work</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={style.saveaddbtn} onPress={saveaddress}>
          <Text style={style.txtsaveadd}>Save Address</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Address