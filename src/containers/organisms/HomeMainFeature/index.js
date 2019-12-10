import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';
import { withNavigation } from 'react-navigation';

class HomeMain extends Component {
    render () {
        return (
            <View style={{marginTop:23}}>
                <View style={{justifyContent:'space-between', flexDirection:'row', flexWrap:'wrap'}}>
                    <MainFeature onPress={()=> alert("GoRide's Page is undermaintenance")} title='GoRide' img={require('../../../assets/icon/go-ride.jpg')}/>
                    <MainFeature onPress={()=> alert("GoCar's Page is undermaintenance")} title='GoCar' img={require('../../../assets/icon/go-car.jpg')}/>
                    <MainFeature onPress={()=> alert("GoFood's Page is undermaintenance")} title='GoFood' img={require('../../../assets/icon/go-food.jpg')}/>
                    <MainFeature onPress={()=> alert("GoBlueBird's Page is undermaintenance")} title='GoBlueBird' img={require('../../../assets/icon/go-bluebird.jpg')}/>
                    <MainFeature onPress={()=> alert("GoSend's Page is undermaintenance")} title='GoSend' img={require('../../../assets/icon/go-send.jpg')}/>
                    <MainFeature onPress={()=> alert("GoPulsa's Page is undermaintenance")} title='GoPulsa' img={require('../../../assets/icon/go-pulsa.jpg')}/>
                    <MainFeature onPress={()=> alert("GoPoints's Page is undermaintenance")} title='GoPoints' img={require('../../../assets/icon/go-points.jpg')}/>
                    <MainFeature onPress={()=> alert("More's Page is undermaintenance")} title='More' img={require('../../../assets/icon/more.jpg')}/>
                </View>
            </View>
        )
    }
}

export default withNavigation(HomeMain);