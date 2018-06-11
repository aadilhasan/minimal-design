// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import renderContent from '../..//utill/renderContent';
import Option from './option';

import './style.scss';

const Body = ({ props }) => (
  <div className="_minimal_select_child_wrapper">
    <div style={props.style} className="select">
      <ul>{props.children}</ul>
    </div>
  </div>
);

export default class Select extends Component {
  state = {};
  componentDidMount() {
    this.renderFuntion = renderContent.bind(this);
    this.select = document.createElement('div');
    document.body.appendChild(this.select);
    this.renderFuntion(<Body props={this.props} />, this.select);
  }

  componentWillReceiveProps(newProps) {
    this.renderFuntion(<Body props={newProps} />, this.select);
  }

  setRef = (ref) => {
    this.ref = ref;
  };

  ref = null;

  showSelect = () => {
    const { scrollX, scrollY } = window;
    const {
      x, y, width, height,
    } = this.ref.getBoundingClientRect();
    const top = scrollY + y + height + 2;
    const left = scrollX + x;

    const props = {
      ...this.props,
      style: {
        display: 'block',
        top,
        left,
        width,
      },
    };
    this.renderFuntion(<Body props={props} />, this.select);
  };

  render() {
    return (
      <button ref={this.setRef} onClick={this.showSelect}>
        {' '}
        Place Holder
      </button>
    );
  }
}

Select.propType = {
  placeholder: PropTypes.string,
};

export { Option };
