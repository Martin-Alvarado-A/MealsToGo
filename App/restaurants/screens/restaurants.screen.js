import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const ScreenSAV = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantInfoContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantsScreen = () => (
  <ScreenSAV>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantInfoContainer>
      <RestaurantInfoCard />
    </RestaurantInfoContainer>
  </ScreenSAV>
);
