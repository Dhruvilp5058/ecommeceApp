import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../../src/Screens/Metrics"

export const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerview: {
        backgroundColor: 'lightyellow',
        flexDirection: 'row',
        paddingVertical: verticalScale(10),
    },
    backbtn: {
        marginLeft: horizontalScale(5)
    },
    txtheader: {
        color: 'black',
        fontWeight: '700',
        fontSize: moderateScale(20),
        marginLeft: horizontalScale(8)
    },
 
    btnsearch: {
        borderWidth: 1,
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: horizontalScale(15),
        borderRadius: moderateScale(20),
        height:verticalScale(45)
    },
    iconsearch: {
        alignSelf: "center",
        marginLeft: horizontalScale(10)
    },
    txtsearch: {
        color: 'black',
        alignSelf: 'center',
        marginLeft: horizontalScale(10)
    },
    iconheart: {
        marginRight: horizontalScale(10)
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
        fontSize: moderateScale(22)
    },
    itemname:{
        color: 'black',
        fontWeight: '700',
        fontSize: moderateScale(15)
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
    },
    ratingstar:{
        width: horizontalScale(15),
        marginTop: verticalScale(10),
        right: horizontalScale(4),
        bottom:verticalScale(5)
        
    },
    textrating:{
        color:'green',
        fontWeight:'700',
        alignSelf:'center',
        fontSize:moderateScale(20),
        marginLeft:horizontalScale(10)
    },
    reviews:{
        color:'black',
        fontSize:moderateScale(30),
        marginLeft:horizontalScale(10)
    },
    stylereviewview:{
        borderWidth:1,
        padding:moderateScale(6)
    },
    reviewerName:{
        fontSize:moderateScale(20),
        color:'black'
    },
    reviewcoment:{
        color:'black',  
        fontSize:moderateScale(22),
        marginLeft:horizontalScale(6)
        
    },
    reviewname:{
        color:'black',  
        fontSize:moderateScale(18), 
        marginLeft:horizontalScale(6),
        marginTop:verticalScale(13)
    },
    reviewerEmail:{
        color:'black',  
        fontSize:moderateScale(18), 
        marginLeft:horizontalScale(6), 
    },
    viewrating:{
        flexDirection:'row',
        // alignItems:'center'
    }


})