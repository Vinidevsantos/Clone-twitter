import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

    <StickyBox>
      <Body>
        <List
        title="Talvez voce curta"
        elements={[
          <FollowSuggestion 
          name="Felipe Deschamps"
          nickname="@deschamps"
          />,
          <FollowSuggestion 
          name="Diego"
          nickname="@DiegoRocketseat"
          />,
          <FollowSuggestion 
          name="Lucas Montano"
          nickname="@lucasmontano"
          />,
        ]}
        />
        <List
        title="Talvez voce curta"
        elements={[
          <News />,<News />,<News />
        ]}
        />
        <List
        title="Talvez voce curta"
        elements={[
          <News />,<News />,<News />
        ]}
        />
      </Body>
    </StickyBox>
  </Container>
    );
}

export default SideBar;