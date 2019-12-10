import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoNews = (props) => {
    return (
        <View style={{paddingTop:16, paddingHorizontal:13}}>
            <View style={{position:'relative'}}>
                <Image source={props.img} style={{height:170, width: '100%', borderRadius:6}}></Image>
                {/* Membuat background gambar sedikit hitam */}
                <View style={{width:'100%', height:'100%', position:'absolute', top:0, left:0, backgroundColor:'black', opacity:0.2, borderRadius:6}}></View>
                <View style={{width:55, height:15, position:'absolute', left:16, top:16}}>
                    <Image source={require('../../../assets/logo/white.png')} style={{width:undefined, height:undefined, resizeMode:'contain', flex:1}}></Image>
                </View>
            </View>
            <View style={{paddingTop:16}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C'}}>GO-NEWS</Text>
                <Text style={{fontSize:14, fontWeight:'normal', color:'#7A7A7A', marginBottom:11}}>{props.description}</Text>
                {/* <Button title="READ" style={{backgroundColor:"#61A756"}}></Button> */}
                <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical:11, paddingHorizontal:12, alignSelf:'flex-end', borderRadius:4}} onPress={props.onPress}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#FFF', textAlign:'center'}}>READ</Text>
                </TouchableOpacity>
            </View>
            <View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1, marginTop:16}}></View>
        </View>
    )
}

export default GoNews;