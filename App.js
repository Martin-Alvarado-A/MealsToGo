import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { RestaurantsScreen } from './App/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
