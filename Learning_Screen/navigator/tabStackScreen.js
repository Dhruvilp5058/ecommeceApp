import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/homescreen/home'
import Catogory from '../screens/Catogory Screen/catogory'

const TabStackNAvi = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='catogory' component={Catogory} />
        </Stack.Navigator>
    )
}

export default TabStackNAvi