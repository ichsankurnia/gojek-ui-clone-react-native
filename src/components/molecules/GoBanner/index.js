import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const Banner = (props) => {
    return (
        <View style={{padding:13}}>
            <View style={{position:'relative'}}>
                <Image source={props.img} style={{height:170, width: '100%', borderRadius:6}}></Image>
                {/* Membuat background gambar sedikit hitam */}
                <View style={{width:'100%', height:'100%', position:'absolute', top:0, left:0, backgroundColor:'black', opacity:0.15, borderRadius:6}}></View>
                <Image source={props.logo} style={{width:60, height:18, resizeMode:'contain', position:'absolute', left:16, top:15}}></Image>
                <View style={{position:'absolute', bottom:0, left:0, width:'100%', alignItems:'center', paddingHorizontal:12 , paddingBottom:10, flexDirection:'row'}}>
                <View>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'#fff', marginBottom:7}}>{props.title}</Text>
                    <Text style={{fontSize:12, fontWeight:'400', color:'#fff'}}>{props.description}</Text>
                </View>
                <View style={{paddingLeft:10, flex:1}}>
                    <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical:11, paddingHorizontal:8, borderRadius:4}}>
                        <Text style={{fontSize:13, fontWeight:'bold', color:'#FFF', textAlign:'center'}}>{props.btn}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1, marginTop:16}}></View>
        </View>
    )
}

export default Banner;