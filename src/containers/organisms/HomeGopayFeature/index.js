import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';
import { withNavigation } from 'react-navigation';

class HomeGopay extends Component {
    render() {
        return (
            <View style={{marginHorizontal:13, marginTop: 5}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#2C5FB8', borderTopLeftRadius:6, borderTopRightRadius:6, paddingHorizontal:14, paddingVertical:10}}>
                    <Image style={{marginTop:3}} source={require('../../../assets/icon/gopay2.png')}></Image>
                    <Text style={{color:'#FFF', fontSize:18, fontWeight: 'bold', }}>Rp980</Text>
                </View>
                <View style={{flexDirection:'row', backgroundColor:'#2F65BD', paddingTop:15, paddingBottom:20, borderBottomLeftRadius:6, borderBottomRightRadius:6}}>
                    <GopayFeature onPress={() => this.props.navigation.navigate('ScanQRCode')} title="Pay" img={require('../../../assets/icon/pay.png')} />
                    <GopayFeature onPress={() => alert('Promo"s page is under maintenance')} title='Promo' img={require('../../../assets/icon/nearby.png')}/>
                    <GopayFeature onPress={() => alert('Top Up"s page is under maintenance')} title='Top Up' img={require('../../../assets/icon/topup.png')} />
                    <GopayFeature onPress={() => alert('More"s page is under maintenance')} title='More' img={require('../../../assets/icon/more.png')} />
                </View>
            </View>
        )
    }
}

export default withNavigation(HomeGopay);