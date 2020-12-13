import React from 'react'
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import CustomSafeWrapper from './CustomSafeWrapper';
import { AutocompleteSearch } from '../components/AutoCompleteSearch';
import { CustomStyles } from '../theme/custom-styles';

const HomeSearch = () => (
    <CustomSafeWrapper>
        <TopNavigation
            title='Home Search' />
        <Divider />
        <Layout style={CustomStyles.layoutStyle}>
            <AutocompleteSearch />
        </Layout>
    </CustomSafeWrapper>
)

export default HomeSearch
