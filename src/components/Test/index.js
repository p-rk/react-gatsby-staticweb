import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import imag from '../../static/header.jpg';

const Test = ({ images }) => (
  <div>
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={images.sizes}
    />
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={images.sizes}
    />
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={images.sizes}
    />
    <img src={imag} alt="test" />
  </div>
);

Test.propTypes = {
  images: PropTypes.object.isRequired
};

export default Test;
