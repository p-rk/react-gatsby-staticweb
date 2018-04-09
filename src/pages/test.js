import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Test from '../components/Test';

class ImageBlur extends Component {
  render() {
    const { data } = this.props;
    return (
      <Test images={data.headerImage} />
    );
  }
}

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1020 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }`;

ImageBlur.propTypes = {
  data: PropTypes.object.isRequired
};

export default ImageBlur;
