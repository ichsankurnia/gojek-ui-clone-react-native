import React, {Component} from 'react';
import {View} from 'react-native';
import BottomNavIcon from '../../../components/molecules/BottomNavigation'
import { withNavigation } from 'react-navigation';

class HomeBotNav extends Component {
    state = {
        activeColor: '#61A756',
    }
    render() {
        return (
            <View style={{backgroundColor:'#FFF', height:55, flexDirection:'row'}}>
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Home')} title='Home' img={require('../../../assets/icon/home-active.png')} active/>
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Orders')} title='Orders' img={require('../../../assets/icon/order.png')} />
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Unknown')} title='Help' img={require('../../../assets/icon/help.png')} />
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Unknown')} title='Inbox' img={require('../../../assets/icon/inbox.png')} />
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Unknown')} title='Account' img={require('../../../assets/icon/account.png')} />
            </View>
        )
    }
}

export default withNavigation(HomeBotNav);