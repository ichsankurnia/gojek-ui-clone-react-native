import React, { Component } from 'react';
import { View, Text  } from "react-native";
import HomeBottomNavigation from '../../organisms/HomeBottomNavigation';

class Account extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{flex:1}}>Account Page</Text>
                <HomeBottomNavigation imgAccount={require('../../../assets/icon/account-active.png')} textColorAccount='#61A756'/>
            </View>
        )
    }
}

export default Account;