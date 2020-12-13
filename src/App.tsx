import React from 'react';
import {
  StatusBar,
} from 'react-native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme/custom-theme.json';
import { AppNavigator } from './navigation/RootNavigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

export default App;
