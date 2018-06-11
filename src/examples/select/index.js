import React from 'react';
import Select, { Option } from '../../components/select';

const SelectEx = () => (
  <Select>
    {' '}
    <ul>
      <Option value="Yo"> yo </Option>
      <li> yo yo </li>
      <li> yo yo yoo </li>
    </ul>{' '}
  </Select>
);

export default SelectEx;
