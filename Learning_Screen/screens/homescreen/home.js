import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Heart, MagnifyingGlass } from 'phosphor-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Keyboard, Pressable, RefreshControl, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Product } from '../../Product/product';
import { style } from './style';

const Home = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        fetchData();
        catogory()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const newData = response.data.products; 
            setData(newData);
            setLoading(false);
            setRefreshing(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setRefreshing(false);
        }
    };

    const calculateDiscountedPrice = (price, discountPercentage) => {
        return price - (price * discountPercentage / 100);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const catogory = async () => {
        const cdata = await axios.get('https://fakestoreapi.com/carts')
        // console.log(cdata)  
    }


    return (
        <View style={style.main}>
            <View style={style.headerview}>
                <TouchableOpacity style={style.btnsearch} onPress={() => navigation.navigate('search')}>
                    <MagnifyingGlass size={30} style={style.iconsearch} />
                    <Text style={style.txtsearch}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.iconheart}>
                    <Heart size={42} color='black' weight='regular' />
                </TouchableOpacity>
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
                    onScrollBeginDrag={() => Keyboard.dismiss()}
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode='on-drag'
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    renderItem={({ item, index }) => (
                        <Pressable onPress={() => navigation.navigate('detail', { item })}>
                            <View style={style.itemview}>
                                <Image
                                    style={style.image}
                                    source={{ uri: item.thumbnail }}
                                />
                                <View style={style.txt}>
                                    <Text style={style.itembrand}>{item?.brand?.substring(0, 18)}</Text>
                                    <Text style={style.itemname}>{item?.tags[1]}</Text>
                                    <Text style={style.itemdescription}>{item?.description?.substring(0, 25)}...</Text>
                                    <View style={style.viewprice}>
                                        <Text style={style.itemdiscountPercentage}>{item?.discountPercentage}% off</Text>
                                        <Text style={style.originalPrice}>${item?.price}</Text>
                                        <Text style={style.itemprice}>${calculateDiscountedPrice(item?.price, item?.discountPercentage).toFixed(1)}</Text>
                                    </View>
                                    <StarRatingDisplay
                                        color='green'
                                        rating={item.rating}
                                        starSize={25}
                                        starStyle={style.star}
                                    />
                                </View>
                            </View>
                        </Pressable>
                    )}
                    ListHeaderComponent={
                        <FlatList
                            data={Product}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View style={style.viewsmartphone}>
                                    <Pressable onPress={() => navigation.navigate('catogory', { catogory: item.type })}>
                                        <Image
                                            style={style.imagemsartphone}
                                            source={item?.image}
                                        />
                                        <Text style={style.txtsmartphone}>{item?.type}</Text>
                                    </Pressable>
                                </View>
                            )}
                        />
                    }
                />
            )}
        </View>
    );
};

export default Home;
