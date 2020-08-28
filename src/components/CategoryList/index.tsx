import React from 'react';

import CategoryItem from './CategoryItem';

import data from './data';

import { Container } from './styles';

const CategoryList: React.FC = () => {
  return (
    <Container>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </Container>
  );
};

export default CategoryList;
