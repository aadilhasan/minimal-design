// @flow
import React from 'react';

const Option = ({ value, children }) => (
  <li className="_minimal-select-item" value={value}>
    {children}
  </li>
);
export default Option;
