/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Router from './src/config/router';


class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;