import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Trash, Truck, Download, Lightning, ShoppingCartSimple } from 'phosphor-react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useDispatch, useSelector } from 'react-redux';
import { style } from './style';
import { removecart, removesavelater, saveforlater } from '../../../src/Redux/Slice/demoSlice';
import { verticalScale } from '../../../src/Screens/Metrics';

const CartMain = () => {
  const cartItems = useSelector(state => state?.demo?.addCart);
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('1');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const filterOptions = [
    { label: 'Qty 1', value: '1' },
    { label: 'Qty 2', value: '2' },
    { label: 'Qty 3', value: '3' },
    { label: 'Qty 4', value: '4' },
  ];
  const calculateDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage / 100);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const deleteItem = (itemIdToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemIdToRemove);
    dispatch(removecart(updatedCartItems));
  };
  // FOR SAVE LATER
  const save = useSelector(state => state.demo.savecart)
  const savelater = (itemIdToRemove) => {
    try {
      const updatedCartItems = cartItems.find(item => item.id == itemIdToRemove);
      dispatch(saveforlater(updatedCartItems))
      const updatedCartItemsdel = cartItems.filter(item => item.id != itemIdToRemove);
      dispatch(removecart(updatedCartItemsdel));
    } catch (e) {
      console.log('error for data done', e)
    }
  }
  const deleteItemsaveleter = (itemIdToRemove) => {
    const updatedCartItems = save.filter(item => item.id !== itemIdToRemove);
    dispatch(removesavelater(updatedCartItems));
  };

  return (
    <View style={style.main}>
      <View style={style.headerview}>
        <Text style={style.txtheader}>My Cart</Text>
      </View>
      {loading ? (
        <View>
          <ActivityIndicator size='large' color={'blue'} />
        </View>
      ) : (
        <ScrollView>
          <FlatList

            data={cartItems}
            scrollEnabled={false}
            ListEmptyComponent={() => (
              <View style={style.emtyview}>
                <ShoppingCartSimple size={100} />
                <Text style={style.emptyCartText}>Your cart is empty</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={style.itemmain}>
                <Pressable onPress={() => navigation.navigate('detail', { item })}>
                  <View style={style.itemview}>
                    <View style={style.imagequntityview}>
                      <Image
                        style={style.itemimage}
                        source={{ uri: item?.thumbnail }}
                      />
                      <Dropdown
                        style={style.dropdown}
                        selectedTextStyle={style.selectedTextStyle}
                        itemTestIDField='hello'
                        itemTextStyle={{ color: 'black', fontSize: 13 }}
                        containerStyle={style.containerStyle}
                        data={filterOptions}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        value={selectedValue}
                        onChange={selectedItem => {
                          setSelectedValue(selectedItem.value);
                        }}
                      />
                    </View>
                    <View style={style.viwlable}>
                      <Text style={style.textlable}>{item.brand} , {item.title} , {item.description.substring(0, 10)}...</Text>
                      <StarRatingDisplay
                        color='green'
                        rating={item.rating}
                        starSize={25}
                        starStyle={style.star}
                      />
                      <View style={style.viewprice}>
                        <Text style={style.itemdiscountPercentage}>↓{item?.discountPercentage}%</Text>
                        <Text style={style.originalPrice}>${item?.price}</Text>
                        <Text style={style.itemprice}>${calculateDiscountedPrice(item?.price, item?.discountPercentage).toFixed(1)}</Text>
                      </View>
                      <Text style={style.offerapply}>2 offers applied - 2 offers available</Text>
                    </View>
                  </View>
                  </Pressable>
                  <ScrollView style={style.expressdil} horizontal> 
                    <Truck size={22} style={style.icontruck} weight='bold' />
                    <Text style={style.txtexpresss}>Express Dilivery</Text>
                    <Text style={style.txtdilvery}>{item?.shippingInformation}</Text>
                    <Text style={style.txtdiliverycharge}>$2</Text>
                    <Text style={style.txtfree}>Free</Text>
                  </ScrollView>
            
                <View style={style.btnview}>
                  <Pressable style={style.btnremove} onPress={() => deleteItem(item.id)}>
                    <Trash size={28} />
                    <Text style={style.txtremove}>Remove</Text>
                  </Pressable>
                  <Pressable style={style.btnlater} onPress={() => savelater(item.id)} >
                    <Download size={28} />
                    <Text style={style.txtlater}>Save For later</Text>
                  </Pressable>
                  <Pressable style={style.btnbuy}>
                    <Lightning size={28} />
                    <Text style={style.txtbuy}>Buy This Now</Text>
                  </Pressable>
                </View>

              </View>
            )}


          />

          {/* Save For Later Flat List */}
          {save.length > 0 ? (

            <View style={style.icontextview}>
              <Download size={28} />
              <Text style={style.saveforlatertxt}>Saved For Later</Text>
            </View>

          ) : null}
          <FlatList
            data={save}
            scrollEnabled={false}
            style={{ marginBottom: 60 }}
            renderItem={({ item }) => (
              <View>
                <View style={style.itemmain}>
                  <Pressable onPress={() => navigation.navigate('detail', { item })}>
                    <View style={style.itemview}>
                      <View style={style.imagequntityview}>
                        <Image
                          style={style.itemimage}
                          source={{ uri: item?.thumbnail }}
                        />
                        <Dropdown
                          style={style.dropdown}
                          selectedTextStyle={style.selectedTextStyle}
                          itemTestIDField='hello'
                          itemTextStyle={{ color: 'black', fontSize: 13 }}
                          containerStyle={style.containerStyle}
                          data={filterOptions}
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          value={selectedValue}
                          onChange={selectedItem => {
                            setSelectedValue(selectedItem.value);
                          }}
                        />
                      </View>
                      <View style={style.viwlable}>
                        <Text style={style.textlable}>{item?.brand} , {item?.title} , {item?.description?.substring(0, 10)}...</Text>

                        <View style={style.viewprice}>
                          <Text style={style.itemdiscountPercentage}>↓{item?.discountPercentage}%</Text>
                          <Text style={style.originalPrice}>${item?.price}</Text>
                          <Text style={style.itemprice}>${calculateDiscountedPrice(item?.price, item?.discountPercentage).toFixed(1)}</Text>
                        </View>
                      </View>
                    </View>

                  </Pressable>
                  <View style={style.btnview}>
                    <Pressable style={style.btnremove} onPress={() => deleteItemsaveleter(item.id)}>
                      <Trash size={28} />
                      <Text style={style.txtremove}>Remove</Text>
                    </Pressable>
                    <Pressable style={style.btnbuy}>
                      <Lightning size={28} />
                      <Text style={style.txtbuy}>Buy This Now</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
      )}
      <View style={style.placeorderview}>
        <View style={style.totalpriceview}>
          <Text style={style.txttotal}>1940</Text>
        </View>
        <Pressable style={style.placeorderbtn}>
          <Text style={style.placeordertxt}>Place order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartMain;
