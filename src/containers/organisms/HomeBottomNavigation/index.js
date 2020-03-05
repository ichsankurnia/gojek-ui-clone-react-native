import React, {Component} from 'react';
import {View} from 'react-native';
import BottomNavIcon from '../../../components/molecules/BottomNavigation'
import { withNavigation } from 'react-navigation';

class HomeBottomNavigation extends Component {

    render() {
        return (
            <View style={{backgroundColor:'#FFF', height:55, flexDirection:'row'}}>
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Home')} title='Home' img={this.props.imgHome} textColor={this.props.textColorHome} />
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Orders')} title='Orders' img={this.props.imgOrders} textColor={this.props.textColorOrders} />
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Help')} title='Help' img={this.props.imgHelp} textColor={this.props.textColorHelp} />
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Inbox')} title='Inbox' img={this.props.imgInbox} textColor={this.props.textColorInbox} />
                <BottomNavIcon onPress={() => this.props.navigation.navigate('Account')} title='Account' img={this.props.imgAccount} textColor={this.props.textColorAccount} />
            </View>
        )
    }
}

HomeBottomNavigation.defaultProps = {
    imgHome: require('../../../assets/icon/home.png'),
    imgOrders: require('../../../assets/icon/order.png'),
    imgHelp: require('../../../assets/icon/help.png'),
    imgInbox: require('../../../assets/icon/inbox.png'),
    imgAccount: require('../../../assets/icon/account.png'),

    textColorHome: '#545454',
    textColorOrders: '#545454',
    textColorHelp: '#545454',
    textColorInbox: '#545454',
    textColorAccount: '#545454'
}


export default withNavigation(HomeBottomNavigation);

// '#545454'
// {() => this.props.navigation.navigate('Unknown')}