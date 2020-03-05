import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {ScanQRCode as QRCode} from './../ScanQRCode'

class ScanQRDetail extends Component{
    render() {
        return (
            <View>
                <Text>{`Data : ${this.props.navigation.state.params.decodeQR}`}</Text>
                <Text>{`rawData : ${this.props.navigation.state.params.rawData}`}</Text>
                <Text>{`Type : ${this.props.navigation.state.params.type}`}</Text>
                <Text>Bounds :</Text>
                <View style={{marginLeft:20}}>
                    <Text>{`Width : ${this.props.navigation.state.params.bounds.width}`}</Text>
                    <Text>{`Height : ${this.props.navigation.state.params.bounds.height}`}</Text>
                    <Text>{`origin : ${this.props.navigation.state.params.bounds.origin}`}</Text>
                    <Text>{`Size : ${this.props.navigation.state.params.bounds.size}`}</Text>
                </View>
            </View>
        )
    }
}

export default ScanQRDetail;