// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Suffix from './suffix';
import Prefix from './prefix';

import './styles.scss';

export default class Input extends Component {
  state = {};

  render() {
    const {
      className = '', prefix, suffix, ...rest
    } = this.props;
    if (!prefix && !suffix) {
      return <input className={`_m-input ${className}`} {...rest} />;
    }
    return (
      <span className="_m-input-wrapper">
        <input className={`_m-input ${className}`} {...rest} />
        <Prefix el={prefix} />
        <Suffix el={suffix} />
      </span>
    );
  }
}

Input.propType = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  prefix: PropTypes.element,
  suffix: PropTypes.element,
};
