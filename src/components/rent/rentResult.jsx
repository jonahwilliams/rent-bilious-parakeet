'use strict';

import * as React from 'react';

class RentResult extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="RentResult">
          <h4>Maximum Allowable Rent for 2015: {this.props.rent} </h4>
      </div>
    );
  }
}

export default RentResult;
