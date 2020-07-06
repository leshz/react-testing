import * as React from 'react';
import { Header, Ul, Li } from './styles';
import Context from '../../Context';

export const HeaderNav = () => (
  <Context.Consumer>
    {({ logout }) => {
      return (
        <Header>
          <h1>Movie Search</h1>
          <nav>
            <Ul>
              <Li onClick={logout}>
                <a href="#">Log Out</a>
              </Li>
            </Ul>
          </nav>
        </Header>
      );
    }}
  </Context.Consumer>
);
