// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderContent, bindListener } from '../..//utill/renderContent';
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
    bindListener('click', window.document, this.onComponentClick);
  }

  componentWillReceiveProps(newProps) {
    this.renderFuntion(<Body props={newProps} />, this.select);
  }

onComponentClick = (e) => {
  if (!this.ref) return;
  if (this.ref.contains(e.target) && this.visible === false) {
    this.showSelect();
    return;
  }

  this.hideSelect();
}

  setRef = (ref) => {
    this.ref = ref;
  };

  ref = null;
  visible = false;

  showSelect = () => {
    const { scrollX, scrollY } = window;
    const {
      x, y, width, height,
    } = this.ref.getBoundingClientRect();
    const top = scrollY + y + height + 2;
    const left = scrollX + x;
    this.visible = true;

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

  hideSelect = () => {
    const props = {
      ...this.props,
      style: {
        display: 'none',
        top: 0,
        left: 0,
      },
    };
    this.visible = false;
    this.renderFuntion(<Body props={props} />, this.select);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className="_minimal-select-wrapper">
        <div className="placeholder" role="button" tabIndex="0" ref={this.setRef}>
          {placeholder || '---'}
        </div>
      </div>
    );
  }
}

Select.propType = {
  placeholder: PropTypes.string,
};

export { Option };
