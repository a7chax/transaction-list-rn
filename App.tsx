import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { tanstackClientConfig } from '@core/config/TanStackQuery';
import { StackNavigator } from '@core/router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <QueryClientProvider client={tanstackClientConfig}>
        <StackNavigator />
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}



export default App;
