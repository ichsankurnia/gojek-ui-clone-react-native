import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const InternalInfo = () => {
    return (
        <View style={{padding:13}}>
            <Image source={require('../../../assets/logo/gojek.png')} style={{width:60, height:16, resizeMode:'contain', marginLeft:-3}}></Image>
            <Text style={{fontSize:17, fontWeight:'bold', color:'#1C1C1C', marginTop:12, marginBottom:15}}>Complete your profile</Text>
            <View style={{flexDirection:'row', marginBottom:15}}>
            <View>
                <Image source={require('../../../assets/dummy/facebook-connect.png')}></Image>
            </View>
            <View style={{marginLeft:16, flex:1}}>
                <Text style={{fontSize:15, fontWeight:'bold', color:'#4A4A4A'}}>Connect with Facebook</Text>
                <Text style={{fontSize:15, color:'#4A4A4A', width:'70%'}}>Log in faster without verification code</Text>
            </View>
            </View>
            <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical:11, paddingHorizontal:12, alignSelf:'flex-end', borderRadius:4}}>
                <Text style={{fontSize:13, fontWeight:'bold', color:'#FFF', textAlign:'center'}}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1, marginTop:16}}></View>
        </View>
    )
}

export default InternalInfo;