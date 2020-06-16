import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    min-width: 1.25rem;
    margin-right: 0.25rem;
`; 

function Icon({icon, small}) {

  if (small) { 
    return (
      <div className={`fa fa-${icon}`}/>
    )
  }

  return (
    <Div className={`fa fa-${icon}`}/>
  );
}

export default Icon;
