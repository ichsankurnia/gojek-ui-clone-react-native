import React from 'react';
import {View, TextInput, Text, Image} from 'react-native';

const SearchBar = () => {
    return (
        <View style={{marginHorizontal:13, backgroundColor:'#FFF', paddingTop:10, paddingBottom:5, flexDirection:'row'}}>
          <View style={{position:'relative', flex:1}}>
            <TextInput style={{borderWidth:1, borderRadius:25, borderColor:'#D7D7D7', height:40, fontSize: 13, paddingLeft:45, paddingRight:20, marginRight:18, backgroundColor:'#FFF'}} placeholder="What do you want to do?"></TextInput>
            <Image style={{position:'absolute', top:5, left:12}} source={require('../../../assets/icon/search.png')}></Image>
          </View>
          <View style={{width:85, height:40, borderRadius:25, backgroundColor: '#F4F4F4', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>    
            <Image style={{borderRadius:15, marginRight:7}} source={require('../../../assets/icon/promo.png')}></Image>
            <Text style={{fontSize:11}}>Promos</Text>
          </View>
        </View>
    )
}

export default SearchBar;