import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../src/Screens/Metrics";

export const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
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
    viewbtn: {
        flexDirection: 'row',
        marginTop: verticalScale(10)
    },
    viewbtnmain: {
        marginLeft: horizontalScale(25),
        marginTop: verticalScale(20)
    },
    btnhomne: {
        borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(10),
        borderRadius: moderateScale(20),
        paddingVertical: verticalScale(2)
    },
    txthomne: {
        alignSelf: 'center',
        fontSize: moderateScale(18),
        color: 'black',
        marginLeft: horizontalScale(5)


    },
    btnwork: {
        borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(10),
        borderRadius: moderateScale(20),
        marginLeft: horizontalScale(20),
        paddingVertical: verticalScale(2)
    },
    txtwork: {
        alignSelf: 'center',
        fontSize: moderateScale(18),
        marginLeft: horizontalScale(5),
        color: 'black'

    },
    saveaddbtn: {
        borderWidth: 1,
        backgroundColor: '#ff6f00',
        marginHorizontal: horizontalScale(15),
        padding:moderateScale(5),
        marginTop:verticalScale(25)
    },
    txtsaveadd: {
        textAlign: 'center',
        fontSize:moderateScale(22),
        color:'white',
        // padding:moderateScale(5)
    }

})