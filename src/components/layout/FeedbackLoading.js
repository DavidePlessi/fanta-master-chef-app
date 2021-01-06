import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {connect} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 999,
    color: '#fff',
  },
}));

function FeedbackLoading(
  {
    isAuthPending
  }) {
  const classes = useStyles();
  return (
    <Backdrop
      className={classes.backdrop}
      open={
        isAuthPending
      }>
      <CircularProgress color="inherit"/>
    </Backdrop>
  )
}

const mapStateProps = state => ({
  isAuthPending: state.auth.isLoading || false,
});

export default connect(mapStateProps)(FeedbackLoading)