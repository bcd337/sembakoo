import React from 'react';
import PropTypes from 'prop-types';


function AppBody({children, ...rest}) {

  return (
    <div {...rest}>
      {children}
    </div>
  );
}


export default AppBody;
