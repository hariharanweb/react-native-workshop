import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

class MovieDetails extends Component {

    static navigationOptions = {
        title: 'Movie Details',
        headerRight: <Button onPress={() => {
            console.log('Pressed on right')
        }} title="Done" />
    };

    constructor(props) {
        super(props)
        console.log(props)
    }


    render() {
        return (
            <View>
                <Text>This screen will display movie details </Text>
                <Text>{this.props.navigation.state.params.data}</Text>
            </View>
        )
    }
}

export default MovieDetails