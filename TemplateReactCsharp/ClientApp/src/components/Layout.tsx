import React, { FC, ReactNode } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

type Props = {
  children?: ReactNode;
}
export const Layout: FC<Props> = (props) => {
  return (
    <div>
      <NavMenu />
      <Container>
        {props.children}
      </Container>
    </div>
  );
};
