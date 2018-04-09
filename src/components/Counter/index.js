import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment } from '../../reducers/counter';

const mapStateToProps = ({ counter }) => ({
  count: counter.count
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ incrementCount: increment }, dispatch)
);

const Counter = ({ count, incrementCount }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={incrementCount}>Increment</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
