import { View, Text, TextInput, FlatList, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { style } from './style';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Heart, MagnifyingGlass } from 'phosphor-react-native';
import { horizontalScale } from '../../../src/Screens/Metrics';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false)
    const navigation = useNavigation()
    const textInputRef = useRef(null);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const newData = response.data.products;
            setData(newData);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };
    useEffect(() => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
    }, []);
    const searchProducts = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`);
            const searchResultsData = response.data.products;
            setSearchResults(searchResultsData);
            setloading(false)
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };
    const handleSearch = () => {
        searchProducts();


    };
    const handleSearchsubmit = () => {

        setloading(true)
        searchProducts();


    };
    const calculateDiscountedPrice = (price, discountPercentage) => {
        return price - (price * discountPercentage / 100);
    };
    return (
        <View style={style.main}>
            <View style={style.headerview}>
                <MagnifyingGlass size={30} style={style.iconsearch} />
                <TextInput
                    style={style.txtinputsearch}
                    placeholder='Search'
                    placeholderTextColor={'black'}
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                    onSubmitEditing={handleSearch}
                    onKeyPress={handleSearchsubmit}
                    ref={textInputRef}

                />
                <Heart size={42} color='black' weight='regular' style={{ right: horizontalScale(10) }} />
            </View>

            {loading ? (
                <View style={style.loaderview}>
                    <ActivityIndicator size={'large'} color={'blue'} />
                </View>
            ) : (<FlatList
                style={style.flatlist}
                data={searchResults.length > 0 ? searchResults : data}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                // onScrollBeginDrag={() => Keyboard.dismiss()}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode='on-drag'

                renderItem={({ item, index }) => (
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
                                    rating={item.rating}
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

export default SearchScreen