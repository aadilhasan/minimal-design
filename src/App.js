import React, { Component } from 'react';
import './App.scss';
import InputEx from './examples/input';
import SelectEx from './examples/select';

// const Prefix = () => <span> PP </span>;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <InputEx />
        <SelectEx />
      </div>
    );
  }
}

export default App;
