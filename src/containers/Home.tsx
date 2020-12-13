import React from 'react'
import { Button, Divider, Layout, Text, TopNavigation, Icon, TopNavigationAction } from '@ui-kitten/components'
import CustomSafeWrapper from './CustomSafeWrapper'
import { CustomStyles } from '../theme/custom-styles';
import { FlatGrid } from 'react-native-super-grid';
import MoviePoster from '../components/MoviePoster';
import { MovieHandller } from '../utils/MovieHandller';

const renderItem = ({ item }) => {
    return <MoviePoster movieData={item} />
}

const SearchIcon = (props) => (
    <Icon {...props} name='search-outline' />
);

const DrawerIcon = (props) => (
    <Icon {...props} name='menu-2-outline' />
);

const Home = ({ navigation }) => {

    const renderSearchAction = () => (
        <TopNavigationAction icon={SearchIcon} onPress={() => navigation.navigate('HomeSearch')} />
    );

    const renderDrawerAction = () => (
        <TopNavigationAction icon={DrawerIcon} onPress={() => navigation.navigate('HomeSearch')} />
    );

    return (
        <CustomSafeWrapper>
            <TopNavigation
                title={evaProps => <Text category="h5">Home Movie</Text>}
                accessoryLeft={renderDrawerAction}
                accessoryRight={renderSearchAction}
            />
            <Divider />
            <Layout style={CustomStyles.layoutStyle}>
                <FlatGrid
                    style={CustomStyles.gridView}
                    data={MovieHandller}
                    renderItem={renderItem}
                    itemDimension={150}
                />
            </Layout>
        </CustomSafeWrapper>
    )
}

export default Home
