import React from 'react';

import data from '../data';

import { Container, Image, Name, Status, RedCircle, Info } from './styles';

interface ItemProps {
  item: typeof data[0];
}

const CategoryItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <Container>
      <Image source={item.source} />
      <Name numberOfLines={1}>{item.name}</Name>
      <Status>
        <RedCircle />
        <Info>51.k</Info>
      </Status>
    </Container>
  );
};

export default CategoryItem;
