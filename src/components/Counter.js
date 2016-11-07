import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as CountActions from '../actions/CountActions'

class Counter extends Component {
  render() {
    console.log('this.props:', this.props);
    let { count, increment, decrement } = this.props;
    return (
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   }
// } // same as bellow:

let mapStateToProps = state => ({
  count: state.count
});

let mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(CountActions.increment())
  },
  decrement() {
    dispatch(CountActions.decrement())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
