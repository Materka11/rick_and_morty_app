import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Inter_400Regular, useFonts} from '@expo-google-fonts/inter';
import {DMMono_400Regular} from '@expo-google-fonts/dm-mono';
import * as SplashScreen from 'expo-splash-screen';

import {MainStack} from './src/stacks/Main';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    DMMono_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return <></>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
