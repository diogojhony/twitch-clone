import React from 'react';

import StreamItem from './StreamItem';

import { Container } from './styles';

const StreamList: React.FC = () => {
  return (
    <Container>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </Container>
  );
};

export default StreamList;
