import {
    StackNavigator
} from 'react-navigation'
import MovieListing from './MovieListing'
import MovieDetails from './MovieDetails'

export default AppNavigator = StackNavigator({
    MovieListingScreen: {
        screen: MovieListing
    },
    MovieDetailsScreen: {
        screen: MovieDetails
    }
})   