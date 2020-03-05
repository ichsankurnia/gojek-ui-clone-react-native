/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Router from './src/config/router';

class SplashScreen extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#212122'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', }}>
          <Image source={require('./src/assets/logo/react.png')} style={{width:120, height:120}}></Image>
        </View>
        <View style={{height:100, justifyContent:'center', alignItems:'center'}}>
          <Text style={{ color: '#dedede', fontFamily:'fantasy'}}>by</Text>
          <Text style={{ fontSize: 24, color: '#00ffff', fontWeight: 'bold', fontFamily:'cursive'}}>ichsankurnia</Text>
        </View>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => {
          resolve('result')
        },
        500
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <Router />
    );
  }
}

export default App;