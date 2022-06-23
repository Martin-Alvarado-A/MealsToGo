import React from 'react';
import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import SvgXml from 'react-native-svg';
import star from '../../../assets/star';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

const CardTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.error};
`;

const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <CardTitle>{name}</CardTitle>
        <Rating>
          {ratingArray.map((el, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </Rating>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
