'use strict';
const engine = () => {

  const minDate = new Date('1981-04-01');
  const maxDate = new Date('2016-02-29');
  const inRange =  (d1, d2, d3) => (d3 >= d1 && d3 <= d2);
  const make = d => new Date(d);
  const inc = d => new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
  const validDate = d => {
    return (d >= minDate && d <= maxDate);
  };
  const validNumber = d => {
    if (Number.isNaN(d)) {
      return false;
    } else if (d <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const find = (d, data) => {
    const loop = (d, data, i) => {
      if (i >= data.length) return null;

      if (inRange(data[i].start, data[i].end, d)) {
        return data[i].rent;
      } else {
        return loop(d, data, i + 1);
      }
    };
    return loop(d, data, 0);
  };

  const get = (init, data) => {
    const loop = (d, data) => {
      let rent = find(d, data);

      if (rent) return [rent].concat(loop(inc(d), data));
      return 0;
    };
    return loop(inc(make(init)), data);
  };

  // Takes an inital date and rent and returns the maximum allowable rent
  const maxRent = (d, rent, data) => {
    if (validDate(d) && validNumber(+rent)) {
      return get(d, data).reduce((acc, x) => {
        return acc * (1 + x);
      }, rent);
    } else {
      return {'error': 'Invalid rent or date'};
    }
  };

  return {find: find, get: get, make: make, maxRent: maxRent};
};


module.exports = engine();
