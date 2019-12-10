import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollItem from '../../../components/molecules/ScrollableItem';

class ScrollHorizontal extends Component {
    render() {
        return (
            <View>
                <Image source={this.props.img} style={{width:60, height:16, resizeMode:'contain', marginLeft:13}}></Image>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15, paddingHorizontal:13}}>
                    <Text style={{fontSize:17, fontWeight:'bold', color:'#1C1C1C'}}>{this.props.title}</Text>
                    <Text style={{fontSize:17, fontWeight:'bold', color:'#61A756'}}>See All</Text>
                </View>
                <ScrollView horizontal={true} style={{flexDirection:'row', paddingLeft:13}}>
                    <ScrollItem title='KFC Minang' img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                    <ScrollItem title='Sederhana Minang' img={require('../../../assets/dummy/go-food-banka.jpg')} />
                    <ScrollItem title='Sederhana Minang' img={require('../../../assets/dummy/go-food-gm.jpg')} />
                    <ScrollItem title='Orins Minang' img={require('../../../assets/dummy/go-food-orins.jpg')} />
                    <ScrollItem title='Sederhana Minang' img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
                </ScrollView>
                <View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1, marginTop:16}}></View>
            </View>
        )
    }
}

export default ScrollHorizontal;