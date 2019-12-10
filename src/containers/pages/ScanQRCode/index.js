import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { RNCamera } from 'react-native-camera';

const IconWithText = (props) => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{width:50, height:50, borderRadius:50, backgroundColor:'#61A756'}}></View>
            <Text style={{maxWidth:70, textAlign:'center', marginTop:8}}>{props.title}</Text>
        </View>
    )
}

const IconAction = () => {
    return (
        <View style={{width:35, height:35, backgroundColor:'#fff', borderRadius:35}} />
    )
}

class ScanQRCode extends React.Component {
    
    takePicture = async() => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    state = {
        decodeQR: 'Unavailable',
        rawData: 'Unavailable',
        type: 'Unavailable'
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:'grey'}}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{position:'absolute', width:'100%', height:'100%', left:0, right:0, flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        //     console.log(barcodes);
                        // }}
                        onBarCodeRead = {(barcode) => {
                            console.log(barcode);
                            this.setState({
                                decodeQR: barcode.data,
                                rawData: barcode.rawData,
                                type: barcode.type
                            })
                        }}
                    />
                    {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={{flex: 0, backgroundColor: '#fff', borderRadius: 5, padding: 15, paddingHorizontal: 20, alignSelf: 'center', margin: 20, }}>
                            <Text style={{ fontSize: 14 }}> SNAP </Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={{flexDirection:'row', paddingHorizontal:15, marginTop:15, justifyContent:'space-between'}}>
                        <IconAction />
                        <View style={{flexDirection:'row', width:80, justifyContent:'space-between'}}>
                            <IconAction />
                            <IconAction />
                        </View>
                    </View>
                </View>
                <View style={{height:190, backgroundColor:'#fff', paddingHorizontal:15}}>
                    <View style={{marginTop:10, marginBottom:18, alignItems:'center', justifyContent:'center'}}>
                        <View style={{height:2, width:40, backgroundColor:'grey', marginBottom:3}}></View>
                        <View style={{height:2, width:40, backgroundColor:'grey'}}></View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:24, fontWeight:'bold', color:'#000'}}>More options</Text>
                        <Text style={{fontSize:14, fontWeight:'bold', color:'#61A756'}}>SHORTCUT</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:14}}>
                        <View style={{flexDirection:'row', alignItems:'flex-start', width:'40%', justifyContent:'space-between', paddingRight:12}}>
                            <IconWithText title='Phone Number' />
                            <IconWithText title='GoPay code' />
                        </View>
                        <View style={{width:1, height:'50%', backgroundColor:'grey'}}></View>
                        <ScrollView style={{flex:1, paddingLeft:15}}>
                            <Text style={{width:'90%'}}>{`Your Recent GoPay receivers will show herem No admin fees!\nQRCode: ${this.state.decodeQR}\nrawData: ${this.state.rawData}\ntype: ${this.state.type}` }</Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

export default ScanQRCode;