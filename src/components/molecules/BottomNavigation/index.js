import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class BottomNavIcon extends React.Component {
    // state = {
    //     currentColor: '#545454'
    // }

    // activeColor() {
    //     this.setState({currentColor:'#61A756'})
    // }
    // <TouchableOpacity onPress={this.props.onPress, ()=>this.activeColor()}></TouchableOpacity>
    // style={{fontSize:10, color: this.state.currentColor}}

    render() {
        return (
            <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image style={{height:26, width:26}} source={this.props.img}></Image>
                    <Text style={{fontSize:10, color: this.props.active? '#61A756': '#545454'}}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// color: props.active? '#61A756': '#545454'

export default BottomNavIcon;