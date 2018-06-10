// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import renderContent from '../..//utill/renderContent';
import './style.scss';

const Body = ({ props }) => <div className="_minimal_select_child_wrapper">{props.children}</div>;

export default class Select extends Component {
  state = {};
  componentDidMount() {
    this.renderFuntion = renderContent.bind(this);
    this.select = document.createElement('div');
    document.body.appendChild(this.select);
    console.log(' after body ', this.select);
    this.renderFuntion(<Body props={this.props} />, this.select);
  }

  componentWillReceiveProps(newProps) {
    this.renderFuntion(<Body props={newProps} />, this.select);
  }

  render() {
    return null;
  }
}

Select.propType = {
  placeholder: PropTypes.string,
};
