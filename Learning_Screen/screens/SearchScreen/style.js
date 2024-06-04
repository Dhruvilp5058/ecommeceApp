import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../src/Screens/Metrics";

export const style = StyleSheet.create({
    main:{
        flex:1
    },
    loaderview:{
        justifyContent:'center',
        alignItems:'center',flex:1
    },
    txtinputsearch: {
        borderWidth: 1,
        borderRadius: moderateScale(20),
        height:verticalScale(45),
        backgroundColor: 'white',
        color: 'black',
        paddingLeft:horizontalScale(50),
        marginRight:horizontalScale(10),
        flex:1,
        right:horizontalScale(14)
    },
    iconsearch: {
        alignSelf: "center",
        left: horizontalScale(27),
        zIndex:1
    },
    flatlist:{
        marginTop:verticalScale(10),
        padding:moderateScale(10),
        // borderRadius:moderateScale(10)
    },
    headerview: {
        backgroundColor: 'lightyellow',
        flexDirection:'row',
        paddingVertical: verticalScale(10),
        justifyContent: 'space-between',
    },
    backbtn: {
        marginLeft: horizontalScale(5)
    },   
    itemview: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    image: {
        height: verticalScale(190),
        width: horizontalScale(185),
    },
    itemdescription: {
        color: 'black',
        fontWeight: '500',
        fontSize: moderateScale(12),
        paddingVertical: verticalScale(2)
    },
    itembrand: {
        color: 'black',
        fontWeight: '500',
        fontSize: moderateScale(20)
    },
    itemprice: {
        fontSize: moderateScale(15),
        fontWeight: '700',
        color: 'black',

    },
    originalPrice: {
        fontSize: moderateScale(15),
        color: 'grey',
        textDecorationLine: 'line-through',
    },
    imagemsartphone: {
        height: verticalScale(50),
        width: horizontalScale(50),
        alignSelf: 'center'
    },
    txtsmartphone: {
        textAlign: 'center',
        marginTop: verticalScale(5),
        color: 'black'
    },
    viewsmartphone: {

        width: horizontalScale(100),
        height: verticalScale(100),
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(5)
    },
    txt: {
        padding: moderateScale(4),
        paddingVertical: verticalScale(10)
    },
    star: {
        width: horizontalScale(5),
        right: horizontalScale(6),
        marginVertical: verticalScale(5)
    },
    itemdiscountPercentage: {
        color: 'green',
        fontWeight: '500',
        fontSize: moderateScale(15)
    },
    viewprice: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }



})