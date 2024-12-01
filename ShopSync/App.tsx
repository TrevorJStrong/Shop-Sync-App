import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import Constants from 'expo-constants';

import {queryClient} from './queryClient';
import RootStack from './src/navigation';
import {useAuthStore} from './src/hooks/useStore';
// import * as Sentry from '@sentry/react-native';

// Sentry.init({
//   dsn: 'https://341d984e61970f676286b7dea87de567@o4508154603700224.ingest.de.sentry.io/4508154610188368',

//   // uncomment the line below to enable Spotlight (https://spotlightjs.com)
//   // enableSpotlight: __DEV__,
// });

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

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
