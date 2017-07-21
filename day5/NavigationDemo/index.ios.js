/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import AppNavigator from './react_native/AppNavigator'

export default class NavigationDemo extends Component {
	render() {
		return (
			<View style={{ marginTop: 60 }}>
				<AppNavigator />
			</View>
		);
	}
}

AppRegistry.registerComponent('NavigationDemo', () => NavigationDemo);
