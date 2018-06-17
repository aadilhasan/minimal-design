// @flow
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export function renderContent(el, parent) {
  ReactDOM.render(el, parent);
}

export function bindListener(type = 'click', target, cb) {
  target.addEventListener(type, cb);
}
