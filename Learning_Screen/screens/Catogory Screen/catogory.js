import { View, Text, Image, FlatList, Pressable, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import { style } from '../homescreen/style'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { ArrowLeft, MagnifyingGlass } from 'phosphor-react-native'

const Catogory = () => {
  const route = useRoute()
  const { catogory } = route.params 
  const navigation = useNavigation()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await axios.get(`https://dummyjson.com/products/category/${catogory}`)
      const newData = data?.data?.products;
      setData(newData)
      setLoading(false);

    })()

  }, [catogory])
  const calculateDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage / 100);
  };
  return (
    <View style={style.main}>
      <View style={style.headerview}>
        <TouchableOpacity style={style.backbtn} onPress={() => navigation.goBack()}>
          <ArrowLeft weight='bold' size={32} />
        </TouchableOpacity>
        <Text style={style.txtheader}>{catogory}</Text>
      </View>
      {loading ? (
        <View style={style.loaderContainer}>
          <ActivityIndicator size="large" color="green" />
        </View>
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index
          }) => (
            <Pressable onPress={() => navigation.navigate('detail', { item })}>
              <View style={style.itemview}>
                <Image
                  style={style.image}
                  source={{ uri: item.thumbnail }}
                />
                <View style={style.txt}>
                  <Text style={style.itembrand}>{item?.brand?.substring(0, 18)}</Text>
                  <Text style={style.itemdescription}>{item?.description?.substring(0, 25)}...</Text>
                  <View style={style.viewprice}>
                    <Text style={style.itemdiscountPercentage}>{item?.discountPercentage}% off</Text>
                    <Text style={style.originalPrice}>${item?.price}</Text>
                    <Text style={style.itemprice}>${calculateDiscountedPrice(item?.price, item?.discountPercentage).toFixed(1)}</Text>
                  </View>
                  <StarRatingDisplay
                    color='green'
                    rating={item?.rating}
                    starSize={25}
                    starStyle={style.star}
                  />
                </View>
              </View>
            </Pressable>
          )}
        />)}
    </View>

  )
}


export default Catogory