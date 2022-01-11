import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 48px;
  display: grid;
  gap: 48px;
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SportsSection = styled.section`
  overflow: hidden;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media ${QUERIES.tabletAndUp} {
    overflow: auto;
    display: flex;
    gap: 16px;
  }
`;

export default SpecialtyStoryGrid;
