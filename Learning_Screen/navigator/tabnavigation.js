import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import TabStackNAvi from './tabStackScreen'
import Profile from '../screens/ProfileScreen/profile'
import CartMAin from '../screens/CartScreen/cartMAin'
import LearnCart from '../screens/learn cart/LearnCart'
import { House, ShoppingCart, UserCircle } from 'phosphor-react-native'


const Tabnavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={TabStackNAvi}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon:({color})=>(
            <House size={30} color='black' />
          ),
          tabBarLabel:'Homesss'
        }} />
      <Tab.Screen name='cart' component={CartMAin}
      options={{
        tabBarIcon:({color})=>(
          <ShoppingCart size={30} color='black' />
        ),
      }}
      /> 
      <Tab.Screen name='profile' component={Profile} 
      options={{
        tabBarIcon:({color})=>(
          <UserCircle  size={30} color='black' />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default Tabnavigation