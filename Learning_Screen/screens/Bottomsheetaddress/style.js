import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../src/Screens/Metrics";

export const style = StyleSheet.create({
    main: {
        flex: 1
    },
    lable: { fontSize: 15, color: 'black', fontWeight: '500' },
    emtyimagee: {
        width: horizontalScale(200),
        height: verticalScale(200),
        marginTop:verticalScale(60)
    },
    emtyview: {
        height: verticalScale(600),
        alignItems: 'center'
    },
    textemtyadd:{
        color:'black',
        fontSize:moderateScale(20),
        marginTop:verticalScale(5),
        opacity:0.5
    }
})