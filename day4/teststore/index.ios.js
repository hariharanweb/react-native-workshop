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
	View,
	FlatList,
	Alert, 
	AsyncStorage
} from 'react-native';
import TestView from './react-native/TestView'

export default class teststore extends Component {

	constructor(props) {
		super(props)
		this.state = {
			movies: []
		}
	}


	componentDidMount() {
		await AsyncStorage.setItem('key', 'value')

		AsyncStorage.getItem('key')

		fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) =>
				response.json()
			).then((responseJson) => {
				this.setState({
					movies: responseJson.movies
				})
			})
	}


	render() {
		// Alert.alert('Heading','Some message', [
		// 	{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
		// ])
		return (
			<FlatList
				style={{ marginTop: 48 }}
				data={this.state.movies}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		);
	}
}

AppRegistry.registerComponent('teststore', () => teststore);
