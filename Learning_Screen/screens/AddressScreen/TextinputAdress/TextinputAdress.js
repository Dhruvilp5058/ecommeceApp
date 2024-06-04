import React, { useState } from 'react';
import { Animated, LayoutAnimation, StyleSheet, Text, TextInput } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../../src/Screens/Metrics';
import Colors from '../../../../assets/Colour/colour'; 



const TextinputAdress = ({ placeholder, props, onChangeText, value, label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const labelPosition = new Animated.Value(value || isFocused ? verticalScale(10) : verticalScale(35));
  const labelfont = new Animated.Value(value || isFocused ? moderateScale(12) : moderateScale(15));
  
  const animationFocus = () => {
    setIsFocused(true);

    LayoutAnimation.spring()
  };

  const animationBlur = () => {
    setIsFocused(false);
    if (!value) {
      LayoutAnimation.spring()
    }
  };
  return (
    <>
      <Animated.Text
        style={[
          {
            color: isFocused ? Colors.primarycolour : Colors.offerprice,
            top: labelPosition,
            fontSize:labelfont,
            zIndex: value || isFocused ? 1 :0

          },
          style.txt
        ]}>
        {label}
      </Animated.Text>
      <TextInput style={style.txtinput}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        value={value}
        onChangeText={onChangeText}
        onFocus={animationFocus}
        onBlur={animationBlur}

        {...props}

      /> 
    </>
  );
};
const style = StyleSheet.create({
  txtinput: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(25),
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(3),
    // marginTop: verticalScale(20),
    color: Colors.blackcolour,
    paddingVertical: verticalScale(12)

  },
  txt: {
    backgroundColor: Colors.backgroundScreen,
    height: verticalScale(20),
    borderRadius: moderateScale(10),
    fontWeight:'500',
    color:'grey',
    alignSelf:'flex-start',
    marginLeft:horizontalScale(40),
    paddingHorizontal:horizontalScale(6)
    // width:horizontalScale(70)
  },
  txterror: {
    color: 'red',
    marginLeft: horizontalScale(32)
  }
});
export default TextinputAdress;
