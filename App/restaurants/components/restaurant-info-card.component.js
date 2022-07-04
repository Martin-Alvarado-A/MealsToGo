import React from 'react';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../assets/star';
import open from '../../../assets/open';

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
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const IconRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex: 3;
  flex-direction: row;
`;

const TempClosed = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F7mu3z0lz0ry31.jpg&f=1&nofb=1',
    ],
    address = '2637 bullocks street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <CardTitle>{name}</CardTitle>
        <IconRow>
          <Rating>
            {ratingArray.map((el, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          {isClosedTemporarily && (
            <TempClosed>
              <Text variant="label" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </TempClosed>
          )}
        </IconRow>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
