import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../containers/Home';
import AboutUs from '../containers/AboutUs';
import ContactUs from '../containers/ContactUs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';
import { HomeNavigation } from './HomeNavigation';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
    <Icon {...props} name='home-outline' />
);

const AboutUsIcon = (props) => (
    <Icon {...props} name='info-outline' />
);

const ContactUsIcon = (props) => (
    <Icon {...props} name='message-circle-outline' />
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='HOME' icon={HomeIcon}/>
        <BottomNavigationTab title='ABOUT US' icon={AboutUsIcon}/>
        <BottomNavigationTab title='CONTACT US' icon={ContactUsIcon}/>
    </BottomNavigation>
);

const RootNavigation = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name="Home" component={HomeNavigation} />
        <Screen name="AboutUs" component={AboutUs} />
        <Screen name="ContactUs" component={ContactUs} />
    </Navigator>
)

export const AppNavigator = () => (
    <NavigationContainer>
        <RootNavigation />
    </NavigationContainer>
)