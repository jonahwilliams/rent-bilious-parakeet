'use strict';

import * as React from 'react';
import RentPage from './rent/rentPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid col-md-8 col-md-offset-2">
        <h1>Rent Control Calculator</h1>
        <RentPage></RentPage>
      </div>
    );
  }
}


export default App;
