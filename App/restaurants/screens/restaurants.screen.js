import React from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.app}>
    <View style={styles.app__search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.app__list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  app__search: {
    padding: 10,
  },
  app__list: {
    flex: 1,
    padding: 10,
  },
});
