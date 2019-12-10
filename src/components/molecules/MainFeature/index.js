import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainFeature = (props) => {
    return (
        <View style={{alignItems:'center', justifyContent:'center', width:'25%', marginBottom:23}}>
            <TouchableOpacity onPress={props.onPress}>
                <Image style={{height:40, width:40}} source={props.img}></Image>
                <Text style={{color:'#555', fontSize:13, marginTop:8}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainFeature;