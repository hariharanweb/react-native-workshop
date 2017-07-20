import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    AsyncStorage,
    Alert,
    FlatList
} from 'react-native'

import Movies from './Movies'

class TestView extends Component {

    constructor(props) {
        super(props)
    }

    addData() {
        // AsyncStorage.setItem('')
        console.log(Movies)
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: true }
        )

    }


    render() {
        return (
            <View>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
                <Text>Hello</Text>
                <Button title="Add data"
                    color="#841584"
                    onPress={this.addData} />
            </View>
        )
    }
}

export default TestView