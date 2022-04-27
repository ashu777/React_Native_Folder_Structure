 /**
 * Copyright 2022  https://github.com/ashu777, Inc. All rights reserved.
 */
 
 import * as React from 'react';
 import { StyleSheet, View } from 'react-native';
 import Color from '../theme/Color';

 function Card(props:any) {
    return (
      <View style={[cardStyles.cardContainer, props.style]}>{props.children}</View>
    );
  }
  
  const cardStyles = StyleSheet.create({
    cardContainer: {
      backgroundColor: Color.white,
      shadowColor: Color.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 5,
      padding: 10,
      marginStart: 25,
      marginEnd: 25,
      zIndex:-1,
    },
  });
 export default Card;
 
 