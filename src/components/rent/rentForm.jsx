'use strict';

import * as React from 'react';

class RentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label htmlFor="date">Move in Date</label>
        <input type="date"
          className="form-control"
          ref="date"
          name="date"
          value={this.props.date}
          onChange={this.props.onChange}></input>
        <br/>
        <label htmlFor="rent">Inital Rent</label>
        <input type="number"
          className="form-control"
          ref="rent"
          name="rent"
          value={this.props.rent}
          onChange={this.props.onChange}></input>
        <br/>

        <input type="submit"
          value="Submit"
          className="btn btn-default"/>
      </form>
    );
  }
}

export default RentForm;
