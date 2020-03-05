import React, { Component } from 'react';
import { View, Text  } from "react-native";
import HomeBottomNavigation from '../../organisms/HomeBottomNavigation';

class Help extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{flex:1}}>Help Page</Text>
                <HomeBottomNavigation imgHelp={require('../../../assets/icon/help-active.png')} textColorHelp='#61A756' />
            </View>
        )
    }
}

export default Help;
