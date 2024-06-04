import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../src/Screens/Metrics";

export const styleadd = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:'lightgrey'
    },
    headerview: {
        backgroundColor: 'lightyellow',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnback: {
        margin: moderateScale(10)
    },
    txtadddil: {
        color: 'black',
        fontSize: moderateScale(18),
        fontWeight: '400'
    },
    addaddress:{
        backgroundColor:'white',
        paddingVertical:verticalScale(10)
    },
    txtaddaddress:{
        color:'blue',
        fontSize:moderateScale(20),
        fontWeight:'600',
        marginLeft:horizontalScale(18)
    },
    mainitemview: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor:'white',
        marginVertical:verticalScale(8)
    },
    itemview: {
        marginHorizontal:horizontalScale(15),
        marginVertical:verticalScale(15)
    },
    textname: {
        color: 'black',
        fontSize:moderateScale(20),
        fontWeight:'400'
    },
    viewnametype: {
        flexDirection: 'row'
    },
    txttype: {
        color: 'grey',
        fontSize:moderateScale(12),
        alignSelf:'center',
        marginLeft:horizontalScale(10),
        backgroundColor:'lightgrey',
        fontWeight:'600',
        paddingVertical:verticalScale(2),
        paddingHorizontal:horizontalScale(5)
    },
    fulladd:{
        color:'black',
        fontSize:moderateScale(15),
        marginTop:verticalScale(15)
    }
})