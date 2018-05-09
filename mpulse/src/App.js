import React, { Component } from 'react';
import AssetsTable from './components/AssetsTable';
import assets from './components/Assets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AssetsTable assets={assets} />
      </div>
    );
  }
}

export default App;
