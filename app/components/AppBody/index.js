import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div`
  flex: 1 1 auto;
`;

function AppBody({children, ...rest}) {

  return (
    <Body {...rest}>
      {children}
    </Body>
  );
}


export default AppBody;
