import * as React from 'react';
import { HeaderNav } from '../components/Header';
import { ContainerWrap } from './style';

export const Container = ({ head = true, children }) => (
  <>
    {head && <HeaderNav />}
    <ContainerWrap>{children}</ContainerWrap>
  </>
);
