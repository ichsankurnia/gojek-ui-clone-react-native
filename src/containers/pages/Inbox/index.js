import React, { Component } from 'react';
import { View, Text  } from "react-native";
import HomeBottomNavigation from '../../organisms/HomeBottomNavigation';

class Inbox extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{flex:1}}>Inbox Page</Text>
                <HomeBottomNavigation imgInbox={require('../../../assets/icon/inbox-active.png')} textColorInbox='#61A756' />
            </View>
        )
    }
}

export default Inbox;
