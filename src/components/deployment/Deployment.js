import React from "react";
import PropTypes from "prop-types";
import MainContainer from "../container/MainContainer";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  mainContainer: {

  }
}));

function Deployment({deployment}) {
  const classes = useStyle();

  return (
    <MainContainer className={classes.mainContainer}>

    </MainContainer>
  )
}