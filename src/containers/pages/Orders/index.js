import React from 'react';
import {View, Text, Button} from 'react-native';
import HomeBottomNavigation from '../../organisms/HomeBottomNavigation';

const Orders = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Text>This is page Orders</Text>
                <Button onPress={() => props.navigation.navigate('OrderDetail')} title='Click Here to go to Order Detail'></Button>
            </View>
            <HomeBottomNavigation imgOrders={require('./../../../assets/icon/order-active.png')} textColorOrders='#61A756' />
        </View>
    )
}

export default Orders;