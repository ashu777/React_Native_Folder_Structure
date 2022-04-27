/**
 * Copyright 2022  https://github.com/ashu777, Inc. All rights reserved.
 */

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from '../theme/Color';
import Fonts from '../theme/Fonts';
import Strings from '../theme/Strings';

const TestScreen = ()=>{
    return(
        <View style = {stylesTestScreen.container}>
           <Text style={stylesTestScreen.text}>{Strings.welcome}</Text>
        </View>
    )
}

export default TestScreen;

const stylesTestScreen = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Color.white
    },
    text:{
        color:Color.black,
        fontSize:16,
        fontFamily:Fonts.primaryBold
    }
})