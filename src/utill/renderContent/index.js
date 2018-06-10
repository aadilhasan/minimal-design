// @flow
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function renderContent(el, parent) {
  console.log(' render contet ', el, parent);
  ReactDOM.render(el, parent);
}
