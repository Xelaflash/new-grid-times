import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <OpinionStoriesWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </OpinionStoriesWrapper>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 1fr;
  @media ${QUERIES.tabletOnly} {
    display: block;
    max-width: 180px;
    margin: 0 16px;
  }
`;

const OpinionStoriesWrapper = styled.div`
  grid-row-start: -1;
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  align-self: start;
  justify-self: end;
  @media ${QUERIES.tabletOnly} {
    margin-bottom: 8px;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
