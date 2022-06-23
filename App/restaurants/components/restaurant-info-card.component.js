import React from 'react';
import styled from 'styled-components/native';
import { Card, Title } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const CardTitle = styled(Title)`
  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F7mu3z0lz0ry31.jpg&f=1&nofb=1',
    ],
    address = '2637 bullocks street',
    isOpenNow = false,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <CardTitle>{name}</CardTitle>
      </Card.Content>
    </RestaurantCard>
  );
};
