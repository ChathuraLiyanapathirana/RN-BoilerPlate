import React from 'react'
import { Button, Card, Text } from '@ui-kitten/components';
import { CustomStyles } from '../theme/custom-styles';
import { Image } from 'react-native';

const MoviePoster = ({ movieData }) => {

    const header = () => {
        return
    }

    return (
        <Card>
            <Image source={{ uri: movieData.image }} style={CustomStyles.moviePosterImage} />
            <Text category='h6'>{movieData.title}</Text>

            <Text>
                {movieData.description}
            </Text>
        </Card>
    )
}

export default MoviePoster
