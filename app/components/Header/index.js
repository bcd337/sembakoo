import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #F2F2F2;
  padding: 1rem;
  font-weight: bold;
`;

function Header() {
  return (
    <Div>
      <FormattedMessage {...messages.title} />
    </Div>
  );
}

export default Header;
