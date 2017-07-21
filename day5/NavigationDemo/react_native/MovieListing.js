import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    Picker,
    WebView
} from 'react-native'

class MovieListing extends Component {
    static navigationOptions = {
        title: 'Movies',
    };

    constructor(props) {
        super(props)
        this.goToNextScreen = this.goToNextScreen.bind(this)
    }

    goToNextScreen() {
        this.props.navigation.navigate('MovieDetailsScreen',
            { data: new Date().toTimeString() })
    }

    render() {
        return (
            <View>
                <WebView
                    source={{ uri: 'https://github.com/facebook/react-native' }}
                    style={{ marginTop: 20, width:100 , height:100 }}
                />
                <Text>This screen will list movies</Text>
                <ActivityIndicator style={{ margin: 50 }} />
                <Button title="Take me next screen"
                    onPress={this.goToNextScreen} />
                <Picker
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                
            </View>
        )
    }
}

export default MovieListing