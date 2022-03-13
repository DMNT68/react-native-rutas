import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';

import {LogBox} from 'react-native';
import {PermissionProvider} from './src/context/PermissionsContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const AppState = ({children}: any) => (
  <PermissionProvider>{children}</PermissionProvider>
);

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};
