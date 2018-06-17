import React from 'react';
import Select, { Option } from '../../components/select';

const SelectEx = () => (
  <Select placeholder="Select Alpha">
    {' '}
    <ul>
      <Option value="a"> A </Option>
      <Option value="b"> B </Option>
      <Option value="c"> C </Option>
    </ul>{' '}
  </Select>
);

export default SelectEx;
