import React from 'react'
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import CustomSafeWrapper from './CustomSafeWrapper';
import { CustomStyles } from '../theme/custom-styles';

const AboutUs = () => (
    <CustomSafeWrapper>
        <TopNavigation
            title='About Us' />
        <Divider />
        <Layout style={CustomStyles.layoutStyle}>
            <Text category='h1'>HOME</Text>
        </Layout>
    </CustomSafeWrapper>
)

export default AboutUs
