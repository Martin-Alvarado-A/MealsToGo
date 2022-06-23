import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './App/restaurants/screens/restaurants.screen';
import { theme } from './App/infrastructure/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
