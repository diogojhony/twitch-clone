import React from 'react';

import streamThumbnail from '../../../images/stream_thumbnail.jpg';

import {
  Container,
  Thumbnail,
  Row,
  Column,
  Header,
  Avatar,
  Username,
  Description,
  Category,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamItem: React.FC = () => {
  return (
    <Container>
      <Thumbnail source={streamThumbnail} />

      <Row>
        <Column>
          <Header>
            <Avatar />
            <Username numberOfLines={1}>diogojhony</Username>
          </Header>

          <Description numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </Description>

          <Category numberOfLines={1}>Science & Technology</Category>
        </Column>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </Row>
    </Container>
  );
};

export default StreamItem;
