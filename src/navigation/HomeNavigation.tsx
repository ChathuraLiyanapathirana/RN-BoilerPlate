import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home';
import HomeSearch from '../containers/HomeSearch';

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigation = () => (
    <Navigator headerMode="none" initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="HomeSearch" component={HomeSearch} />
    </Navigator>
)