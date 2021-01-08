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
    isAuthPending,
    isDeploymentPending,
    isEpisodePending,
    isParticipantPending,
    isFantaBrigadePending
  }) {
  const classes = useStyles();
  return (
    <Backdrop
      className={classes.backdrop}
      open={
        isAuthPending ||
        isDeploymentPending ||
        isEpisodePending ||
        isParticipantPending ||
        isFantaBrigadePending
      }>
      <CircularProgress color="inherit"/>
    </Backdrop>
  )
}

const mapStateProps = state => ({
  isAuthPending: state.auth.isLoading || false,
  isDeploymentPending: state.deployment.isLoading || false,
  isEpisodePending: state.episode.isLoading || false,
  isParticipantPending: state.participant.isLoading || false,
  isFantaBrigadePending: state.fantaBrigade.isLoading || false
});

export default connect(mapStateProps)(FeedbackLoading)