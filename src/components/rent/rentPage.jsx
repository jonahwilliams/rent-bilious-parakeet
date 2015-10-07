'use strict';

import * as React from 'react';
import RentForm from './rentForm';
import RentResult from './rentResult';
import get from '../../api.js';

class RentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2014-01-01',
      rent: 1,
      max: '???'
    };
    this.updateState = function(event) {
      let field = event.target.name;
      let value = event.target.value;
      if (field === 'date') {
        return this.setState({date: value});
      }
      return this.setState({rent: value});
    }.bind(this);

    this.submitState = function(event) {
      event.preventDefault();
      let date = this.state.date;
      let rent = this.state.rent;

      get(date, rent)
        .then(data => JSON.parse(data))
        .then(data => this.setState({max: '$ ' + data.max.toFixed(2)}));

    }.bind(this);
  }
  render() {
    return (
      <div>
        <RentForm
          date={this.state.date}
          rent={this.state.rent}
          onChange={this.updateState}
          onSubmit={this.submitState}></RentForm>
        <RentResult rent={this.state.max}></RentResult>
      </div>
    );
  }
}

export default RentPage;
