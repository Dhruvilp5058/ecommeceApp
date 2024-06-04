import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import { ArrowLeft } from 'phosphor-react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BottomSheet from 'react-native-raw-bottom-sheet'
import Carousel from 'react-native-reanimated-carousel'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, buynowcart, removesavelater } from '../../../src/Redux/Slice/demoSlice'
import Bottomsheetadd from '../Bottomsheetaddress/bottomsheetadd'
import { style } from '../homescreen/style'
import { styledetail } from './style'
const { width } = Dimensions.get('window');

const DetailScreen = () => {

  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  console.log(item)
  const catogory = item.category
  const dispatch = useDispatch()
  const calculateDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage / 100);
  };



  useEffect(() => {
    const fetchdata = () => {
      const { item } = route.params
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchdata();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  const [selectedItem, setSelectedItem] = useState(false);
  const bottomSheetRef = useRef(null);
  const openBottomSheet = () => {
    setSelectedItem(true);
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };
  const addresss = useSelector(state => state.demo.selectedadd);
  const mainadd = addresss?.selectedAddress
  const save = useSelector(state => state.demo.savecart)
  const AddTocart = (itemIdToRemove) => {
    try {
      const updatedCartItems = save.filter(item => item.id !== itemIdToRemove);
      dispatch(removesavelater(updatedCartItems));
      dispatch(addToCart(item))
    } catch (e) {
      console.log(e);
    }
  }
  const cart = useSelector(state => state.demo.buynow)

  const BuynowTOCart = (itemID) => {
    try {
      const cartItem = cart.find(item => item.id === itemID);
      if (cartItem) {
        navigation.navigate('buynow');
      } else {
        dispatch(buynowcart(item));
        navigation.navigate('buynow');
      }
    } catch (e) {
      console.log(e);
    }
  }

  const cartitem = useSelector(state => state.demo.addCart)
  const isItemInReduxfavCart = itemId => {
    return cartitem.find(item => item.id === itemId);
  };

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${catogory}`);

      const newData = response.data.products;
      setData(newData)


    } catch (error) {
      console.error('Error fetching data:', error);


    }
  };
  const sortedReviews = item.reviews.slice().sort((a, b) => b.rating - a.rating);
  return (

    <View style={styledetail.main}>
      <View style={styledetail.headerview}>
        <TouchableOpacity style={styledetail.backbtn} onPress={() => navigation.goBack()}>
          <ArrowLeft weight='bold' size={32} />
        </TouchableOpacity>
        <Text style={styledetail.txtheader}>Product Detail</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {loading ? (
          <View style={styledetail.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            <Carousel
              loop
              width={width}
              height={310}
              autoPlay={true}
              data={item.images}
              scrollAnimationDuration={3000}
              renderItem={({ item: image }) => (
                <Image source={{ uri: image }} style={styledetail.itemimage} />
              )}
            />
            <View style={styledetail.itemtext}>
              <Text style={styledetail.brandtext}> {item.brand} - {item.tags[1]}</Text>
              <Text style={styledetail.titletext}> {item.title}</Text>
              <StarRatingDisplay
                color='green'
                rating={item.rating}
                starSize={25}
                starStyle={styledetail.star}
              />
              <Text style={styledetail.availablestock}>{item.availabilityStatus}</Text>
            </View>
            <View style={styledetail.itemview}>
              <Text style={styledetail.itemdiscount}>↓{item.discountPercentage}%</Text>
              <Text style={styledetail.itemprice}>${item.price}</Text>
              <Text style={styledetail.itemorignalprice}>${calculateDiscountedPrice(item?.price, item?.discountPercentage).toFixed(1)}</Text>
            </View>
            <Text style={styledetail.description}>Description -</Text>
            <Text style={styledetail.descriptiontext}>{item.description}</Text>
            <View style={styledetail.viewgrey}>
              {addresss ?
                (
                  <View style={styledetail.addressmainview}>
                    <View style={styledetail.addview}>
                      <View style={styledetail.textaddnamepin}>
                        <Text style={styledetail.txtmaindil}>Dilever to:</Text>
                        <Text style={styledetail.mainadd}> {mainadd?.name.substring(0, 10)}...{mainadd?.pincode} </Text>
                      </View>
                      <View>
                        <Text style={styledetail.textaddfull}>{mainadd?.housedetail.substring(0, 20)} , {mainadd?.colony.substring(0, 10)}...</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styledetail.changebtn} onPress={() => openBottomSheet()}>
                      <Text style={styledetail.changetxt}>Change</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styledetail.addressview}>
                    <Text style={styledetail.txtdil}>Dilever to:</Text>
                    <Text style={styledetail.txtadd}> No Address </Text>
                    <TouchableOpacity style={styledetail.changebtn} onPress={() => openBottomSheet()}>
                      <Text style={styledetail.changetxt}>Change</Text>
                    </TouchableOpacity>
                  </View>
                )}
              <BottomSheet ref={bottomSheetRef} height={600}>
                {selectedItem && <Bottomsheetadd />}

              </BottomSheet>
            </View>
            <Text style={style.reviews}>Rating & Reviews</Text>
            <FlatList
              data={sortedReviews}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View style={style.stylereviewview}>
                  <View style={style.viewrating}>
                    <StarRatingDisplay
                      color='green'
                      rating={item.rating}
                      starSize={30}
                      starStyle={style.ratingstar}
                    />
                    <Text style={style.textrating}>{item.rating}.0 </Text>
                  </View>
                  <Text style={style.reviewcoment}>{item?.comment}</Text>
                  <Text style={style.reviewname}>Name :- {item?.reviewerName}</Text>
                  <Text style={style.reviewerEmail}>Email :- {item?.reviewerEmail}</Text>
                </View>

              )}
            />
            <View style={styledetail.metaContainer}>
              <View style={styledetail.warrwntydetail}>
                <Text style={styledetail.metaText}>Return Policy: </Text>
                <Text style={styledetail.metaText}>{item?.returnPolicy}</Text>
              </View>
              <View style={styledetail.warrwntydetail}>
                <Text style={styledetail.metaText}>Warranty Information: </Text>
                <Text style={styledetail.metaText}>{item?.warrantyInformation}</Text>
              </View>
              <View style={styledetail.warrwntydetail}>
                <Text style={styledetail.metaText}>Minimum Order Quantity: </Text>
                <Text style={styledetail.metaText}>{item?.minimumOrderQuantity}</Text>
              </View>
            </View>
            <FlatList
              data={data}
              numColumns={2}
              scrollEnabled={false}
              style={{ flex: 1 }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index
              }) => (
                <>
                  {loading ?
                    (
                      <ActivityIndicator size={'large'} color={'blue'} />
                    )
                    :
                    (<Pressable onPress={() => navigation.push('detail', { item })}>
                      <View style={styledetail.itemviewflat}>
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
                    </Pressable>)}
                </>
              )} />

          </>
        )}

      </ScrollView>
      <View style={styledetail.viewbtn}>
        {isItemInReduxfavCart(item.id) ?
          (<Pressable
            style={styledetail.btnaddcart}
            onPress={() => navigation.navigate('cart')}>
            <Text style={styledetail.txtaddcart}>Go To Cart</Text>
          </Pressable>
          ) : (
            <Pressable style={styledetail.btnaddcart} onPress={() => AddTocart(item.id)}>
              <Text style={styledetail.txtaddcart}>Add To Cart</Text>
            </Pressable>)}
        <Pressable activeOpacity={1} style={styledetail.btnbuynow} onPress={() => BuynowTOCart(item.id)} >
          <Text style={styledetail.txtbuynow}>Buy Now</Text>
        </Pressable>

      </View>
    </View>
  )
}

export default DetailScreen;
