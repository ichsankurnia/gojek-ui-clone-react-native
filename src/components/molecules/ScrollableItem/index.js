import React from 'react';
import {View, Image, Text} from 'react-native';

const ScrollItem = (props) => {
    return (
        <View style={{marginRight:15}}>
            <Image source={props.img} style={{width:150, height:150, resizeMode:'cover', borderRadius:10}}></Image>
            <Text style={{fontSize:16, fontWeight:'bold', color:'#1c1c1c', marginTop:12}}>{props.title}</Text>
        </View>
    )
}

export default ScrollItem;