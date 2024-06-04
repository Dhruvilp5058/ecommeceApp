import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../src/Screens/Metrics"; 

export const styledetail = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'

    },
    loaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(690)


    },
    headerview: {
        backgroundColor: 'lightyellow',
        flexDirection: 'row',
        paddingVertical: verticalScale(10)
    },
    itemimage: {
        height: verticalScale(300),
        width: horizontalScale(300),
        resizeMode: "contain",
        alignSelf: 'center',

        borderWidth: 1
    },
    txtheader: {
        color: 'black',
        fontWeight: '700',
        fontSize: moderateScale(20),
        marginLeft: horizontalScale(8)
    },
    backbtn: {
        marginLeft: horizontalScale(5)
    },
    itemview: {
        flexDirection: 'row',
        backgroundColor: '#bcf7da',
        marginHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(5),
    },
    itemviewflat: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        // flexDirection:'row'
    },
    itemprice: {
        color: 'grey',
        fontWeight: '400',
        fontSize: moderateScale(25),
        marginLeft: horizontalScale(13),
        textDecorationLine: 'line-through',

    },
    itemorignalprice: {
        color: 'black',
        fontWeight: '400',
        fontSize: moderateScale(25),
        marginLeft: horizontalScale(13),
    },
    itemdiscount: {
        color: 'green',
        fontWeight: '500',
        fontSize: moderateScale(25),
        marginLeft: horizontalScale(10)
    },
    itemtext: {
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(10),
        paddingVertical: verticalScale(10),
    },
    brandtext: {
        color: 'black',
        fontWeight: '600',
        fontSize: moderateScale(20),
    },
    titletext: {
        color: 'black',
        fontWeight: '300',
        fontSize: moderateScale(17),
    },
    description: {
        color: 'black',
        fontWeight: '400',
        fontSize: moderateScale(18),
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(10)
    },
    descriptiontext: {
        color: 'black',
        fontWeight: '300',
        fontSize: moderateScale(17),
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(1)
    },
    addressview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginVertical: verticalScale(3),
        backgroundColor: 'white',
        height: verticalScale(50),

    },
    addview: {
        width: horizontalScale(290)
    },
    addressmainview: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginVertical: verticalScale(5),
        backgroundColor: 'white',
        height: verticalScale(55),
    },
    textaddnamepin: {
        flexDirection: 'row'
    },
    txtdil: {
        fontSize: moderateScale(18),
        color: 'black',
        marginLeft: horizontalScale(20),
        alignSelf: 'center'

    },
    txtadd: {
        fontSize: moderateScale(18),
        color: 'black',
        alignSelf: 'center'

    },
    txtmaindil: {
        color: 'black',
        fontSize: moderateScale(18)
    },
    mainadd: {
        width: horizontalScale(228),
        marginLeft: horizontalScale(2),
        color: 'black',
        fontSize: moderateScale(18),
        fontWeight: '700'
    },
    textaddfull: {
        color: 'grey',
        fontSize: moderateScale(18)
    },
    changebtn: {
        borderWidth: 1,
        backgroundColor: 'lightyellow',
        padding: moderateScale(5),
        margin: moderateScale(5),
        alignSelf: 'center',
    },
    changetxt: {
        fontSize: moderateScale(18),
        color: 'black',
    },
    star: {
        width: horizontalScale(12),
        marginTop: verticalScale(10),
        right: horizontalScale(4)
    },
    availablestock: {
        color: 'grey',
        backgroundColor: 'lightgrey',
        alignSelf: 'flex-start',
        padding: moderateScale(5),
        marginLeft: horizontalScale(5),
        marginTop: verticalScale(10)
    },
    viewgrey: {
        backgroundColor: 'lightgrey',
        marginTop: verticalScale(10)
    },
    viewbtn: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    btnaddcart: {
        borderWidth: 0.5,
        flex: 1,
        paddingVertical: verticalScale(10),
        backgroundColor: 'white'
    },
    txtaddcart: {
        textAlign: 'center',
        color: 'black',
        fontSize: moderateScale(20)
    },

    btnbuynow: {
        borderWidth: 0.5,
        flex: 1,
        backgroundColor: 'lightyellow',
        paddingVertical: verticalScale(10)
    },
    txtbuynow: {
        textAlign: 'center',
        color: 'black',
        fontSize: moderateScale(20)
    },
    metaContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        marginVertical: verticalScale(20),
        padding: moderateScale(10),
    },
    metaText: {
        color: 'black'
    },
    warrwntydetail: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(15)
    }


})