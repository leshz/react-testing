import * as React from 'react';
import { Header, Ul, Li } from './styles';

export const HeaderNav : React.FC = () => (
  <Header>
    <h1>Test <br /></h1>
    <nav> 
      <Ul>  
        <Li><a href="#">Item </a></Li>
        <Li><a href="#">Item</a></Li>
        <Li><a href="#">Item</a></Li>
      </Ul>
    </nav>
  </Header>
);


