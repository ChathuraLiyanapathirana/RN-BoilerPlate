import React from 'react'
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import CustomSafeWrapper from './CustomSafeWrapper';
import { CustomStyles } from '../theme/custom-styles';

const ContactUs = () => (
    <CustomSafeWrapper>
        <TopNavigation
            title='Contact Us' />
        <Divider />
        <Layout style={CustomStyles.layoutStyle}>
            <Text category='h1'>Contact Us</Text>
        </Layout>
    </CustomSafeWrapper>
)

export default ContactUs
