import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GopayFeature = (props) =>{
    return (
      <View style={{flex:1, paddingVertical:5}}>
        <TouchableOpacity onPress={props.onPress} style={{alignItems:'center', justifyContent:'center'}}>
          <Image style={{height:40, width:40}} source={props.img}></Image>
          <Text style={{color:'#fff', fontWeight:'bold', marginTop:7, fontSize:15}}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    )
}

// class GopayFeature extends Component{
//   render(){
//     return (
//       <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
//       <Image style={{height:30, width:30}} source={this.props.img}></Image>
//       <Text style={{color:'#fff', fontWeight:'bold', marginTop:7, fontSize:13}}>{this.props.title}</Text>
//     </View>
//     )
//   }
// }
export default GopayFeature;