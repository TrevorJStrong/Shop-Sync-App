import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import Constants from 'expo-constants';
import Toast from 'react-native-toast-message';
import * as Sentry from '@sentry/react-native';

import {queryClient} from './queryClient';
import RootStack from './src/navigation';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN_KEY

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const App = () => {
  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize(Constants?.expoConfig?.extra?.oneSignalAppId);

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });

  const linking = {
    // enabled: 'auto',
    prefixes: [
      /* your linking prefixes */
      /* 'https://shopsync.com' */
      'myapp://'
    ],
    config: {
      /* configuration for matching screens with paths */
      initialRouteName: "ShoppingLists" as const,
      screens: {
        Main: {
          screens: {
            SingleList: 'single-list/:id',
          }
        }
      }
    },
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer linking={linking}>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
      <Toast />
    </>
  );
};

export default App;
