import React from 'react'
import { SafeAreaView } from 'react-native'

const CustomSafeWrapper = ({ children }) => (
    <SafeAreaView style={{ flex: 1 }}>
        {children}
    </SafeAreaView>
)

export default CustomSafeWrapper
