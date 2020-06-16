import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon'
import Link from './Link'

function List({icon, children, to}) {

  return (
    <Link to={to} exact activeClassName={"active"}>
        {icon && <Icon icon={icon}/>}
        {children}
    </Link>
  );
}

List.propTypes = {

};

export default List;
