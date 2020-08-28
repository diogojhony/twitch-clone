import React from 'react';

import { 
  Container,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

const ChannelItem: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>jhonycodes</Username>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </Container>
  );
};

export default ChannelItem;
