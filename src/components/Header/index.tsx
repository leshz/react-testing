import * as React from 'react';
import { Header, Ul, Li } from './styles';

export const HeaderNav: React.FC = () => (
  <Header>
    <h1>Movie Search</h1>
    <nav>
      <Ul>
        <Li>
          <a href="#">Log Out</a>
        </Li>
      </Ul>
    </nav>
  </Header>
);
