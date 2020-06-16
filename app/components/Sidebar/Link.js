import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: block;
  color: unset;
  text-decoration: none;

  &:hover {
    color: #1c1c1c;
    text-decoration: none;
  }

  &:active, &:focus  {
    color: black;
    text-decoration: none;
  }

  &.active { 
    color: black;
    text-decoration: none;
  }
`;
