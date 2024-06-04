import { View, FlatList, Image, Text } from 'react-native';
import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { style } from './style';
import { selectedaddress } from '../../../src/Redux/Slice/demoSlice';
import { images } from '../../../assets/image';
import { horizontalScale, verticalScale } from '../../../src/Screens/Metrics'

const Bottomsheetadd = () => {
  const address = useSelector(state => state.demo.demoValue);
  // console.log(address)

  const [selectId, setSelectId] = useState('');
  const radioButtons = useMemo(
    () =>
      address.map((item, index) => ({
        id: index+1,
        label: `${item.name}, ${item.pincode},${`\n`}${item.housedetail} ${item.colony}${`\n`}${item.number}`,
        value: index.toString(),
        selected: selectId === index.toString(),

      })),
    [address, selectId] 
  );


  const addresssdemo = useSelector(state => state.demo.selectedadd);
  // console.log('selected address+++++++++++', addresssdemo)
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectId(addresssdemo?.id)
  }, [addresssdemo])
  const handlePress = (id) => {
    const selectedAddress = address.find(item => item.id === id); 
    const iddemo = {selectedAddress,id}
    // console.log('---------------------',iddemo)
    dispatch(selectedaddress(iddemo));
  };

  return (
    <View>
      {!address ? (
        <View style={style.emtyview}>

          <Text style={style.textemtyadd}>Your Address is Emty</Text>
          <Text style={style.textemtyadd}>Please Add Address</Text>
        </View>
      ) : (<FlatList
        data={radioButtons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RadioGroup
            key={item.id}
            radioButtons={[item]}
            onPress={handlePress}
            selectedId={selectId}
            containerStyle={{
              flexDirection: 'row',
              marginTop: verticalScale(10),
              marginLeft: horizontalScale(10)
            }}
            labelStyle={style.lable}
          />
        )}
      />)}
    </View>
  );
};

export default Bottomsheetadd;
