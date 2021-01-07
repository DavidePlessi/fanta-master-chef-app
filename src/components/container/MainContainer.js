import React, {Fragment} from 'react';
import {AppBar, Container} from '@material-ui/core';
import PropTypes from "prop-types";

const MainContainer = ({children, maxWidth, className}) => {
  return (
    <Container style={{
      maxWidth: maxWidth,
      padding: 20,
      border: "1px solid #CD243B",
      boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.75)",
      backgroundColor: "rgba(255, 255, 255, .8)"
    }} className={className}>
      {children}
    </Container>
  )
}

MainContainer.propTypes = {
  children: PropTypes.any.isRequired,
  maxWidth: PropTypes.number,
  className: PropTypes.string
}

MainContainer.defaultProps = {
  className: ""
}

export default MainContainer