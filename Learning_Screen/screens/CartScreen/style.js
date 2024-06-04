import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../src/Screens/Metrics";
import font from "../../../assets/font/font";

export const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    emtyview: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        opacity: 0.2,
        height: verticalScale(500)
    },
    emptyCartText: {
        color: 'black',
        fontSize: moderateScale(30),

    },
    headerview: {
        backgroundColor: 'lightyellow',
        flexDirection: 'row',
        paddingVertical: verticalScale(10)
    },
    txtheader: {
        color: 'black',
        fontWeight: '700',
        fontSize: moderateScale(20),
        marginLeft: horizontalScale(10)
    },
    itemmain: {
        backgroundColor: 'white',
        marginVertical: verticalScale(5),
        borderWidth: 1
    },
    itemview: {
        flexDirection: 'row',
    },
    imagequntityview: {
        margin: moderateScale(10),
        alignItems: 'center'
    },
    itemimage: {
        height: verticalScale(90),
        width: horizontalScale(70),

    },
    dropdown: {
        height: verticalScale(30),
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: moderateScale(2),
        paddingHorizontal: horizontalScale(8),
        width: horizontalScale(70),
        marginVertical: verticalScale(5),
    },
    selectedTextStyle: {
        fontSize: moderateScale(13),
        color: 'black'
    },

    containerStyle: {
        borderRadius: moderateScale(2),
        height: verticalScale(100),
        width: horizontalScale(65)
    },
    icon: {
        marginRight: horizontalScale(5),
    },
    viwlable: {
        marginTop: verticalScale(5),
        width: horizontalScale(276),
        justifyContent: 'space-evenly'
    },
    textlable: {
        color: 'black',
        fontSize: moderateScale(20),
        fontWeight: "600"
    },
    star: {
        width: horizontalScale(15),
        right: horizontalScale(6)
    },
    viewprice: {
        flexDirection: 'row',
    },
    itemdiscountPercentage: {
        color: 'green',
        fontWeight: '800',
        fontSize: moderateScale(20),
    },
    originalPrice: {
        fontWeight: '800',
        fontSize: moderateScale(20),
        color: 'grey',
        textDecorationLine: 'line-through',
        marginLeft: horizontalScale(5)
    },
    itemprice: {
        fontWeight: '800',
        fontSize: moderateScale(20),
        color: 'black',
        marginLeft: horizontalScale(5)
    },
    offerapply: {
        color: 'green',
        fontWeight: '700',
        marginTop: verticalScale(5)
    },
    expressdil: {
        flexDirection: "row",
        marginTop: verticalScale(9), 
    },
    icontruck: {
        marginLeft: horizontalScale(10)
    },
    txtexpresss: {
        fontSize: moderateScale(16),
        color: 'black',
        // fontWeight:'700',
        fontFamily: font.italic,
        marginLeft: horizontalScale(5)
    },
    txtdilvery: {
        fontSize: moderateScale(16),
        marginLeft: horizontalScale(5),
        color: 'grey'
    },
    txtdiliverycharge: {
        color: 'grey',
        fontWeight: '600',
        textDecorationLine: 'line-through',
        fontSize: moderateScale(16),
        marginLeft: horizontalScale(5)
    },
    txtfree: {
        fontSize: moderateScale(16),
        color: 'green',
        fontWeight: '700',
        marginLeft: horizontalScale(5), 
    },
    btnview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        marginTop: verticalScale(8),
        marginBottom: verticalScale(5),

    },
    btnremove: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: verticalScale(8),
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,

    },
    txtremove: {
        fontSize: moderateScale(15),
        color: 'black'
    },
    btnlater: {
        borderTopWidth: 0.5,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingVertical: verticalScale(8),
        justifyContent: 'space-between',
        borderRightWidth: 0.3,
        paddingHorizontal: horizontalScale(5)
    },
    txtlater: {
        fontSize: moderateScale(15),
        color: 'black'
    },
    btnbuy: {
        // borderLeftWidth:0.5,
        borderTopWidth: 0.5,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingVertical: verticalScale(8),
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(5),
    },
    txtbuy: {
        fontSize: moderateScale(15),
        color: 'black'
    },
    icontextview: {
        flexDirection: 'row',
        marginLeft: horizontalScale(10)
    },
    saveforlatertxt: {
        color: 'black',
        fontSize: moderateScale(18),
        marginLeft: horizontalScale(10)
    },
    placeorderview: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        position:'absolute',
        bottom:0
    },
    totalpriceview: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.8,
    },
    txttotal: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        marginLeft: horizontalScale(10),
        color: 'black'
    },
    placeorderbtn: {
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        flex: 0.4,
        margin: moderateScale(10),
        paddingVertical: verticalScale(9)
    },
    placeordertxt: {
        color: 'black',
        fontSize: moderateScale(18),
        fontWeight: 'bold',
    }
})