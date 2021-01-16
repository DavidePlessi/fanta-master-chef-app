import React from "react";
import PropTypes from "prop-types";
import MainContainer from "../container/MainContainer";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Typography} from "@material-ui/core";
import ParticipantAvatar from "../participant/ParticipantAvatar";
import clsx from "clsx";
import ResultsList from "./ResultsList";

const useStyle = makeStyles((theme) => ({
  mainContainer: {},
  avatar: {
    margin: 'auto'
  },
  participantContainer: {
    display: 'inline-block',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    width: 100,
    marginBottom: 10
  },
  participantsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 'calc(100vh - 240px)',
    overflow: 'auto'
  },
  participantEliminatedName: {
    textDecoration: "line-through"
  },
  pointSpan: {
    color: theme.palette.primary.main
  },
  resultListItem: {
    fontSize: "1.5 rem",
    color: 'green'
  },
  resultListItemIsNegative: {
    color: 'red'
  }
}));

function Deployment({deployment}) {
  const classes = useStyle();

  if (!deployment.participants || deployment.participants.length < 4) {
    return <></>
  }

  return (
    <MainContainer className={classes.mainContainer}>
      <Typography
        variant={'h5'}
        component={'h5'}
        style={{marginBottom: 10}}>
        {deployment.user.name}
        <span className={classes.pointSpan}>
          {(!!deployment.results ? ' - ' + deployment.results.resultsPoint + ' punti' : '')}
        </span>
      </Typography>
      <Divider style={{marginBottom: 10}}/>
      <div className={classes.participantsContainer}>
        {!!deployment.participants && deployment.participants.map(participant => {
          return (
            <div className={classes.participantContainer}>
              <ParticipantAvatar participant={participant} className={classes.avatar}/>
              <Typography
                variant={'p'}
                component={'p'}
                align={'center'}
                className={clsx({
                  [classes.participantEliminatedName]: participant.eliminated
                })}
              >
                {participant.name + " " + participant.lastName}
              </Typography>
            </div>
          )
        })}
      </div>
      <Divider style={{marginBottom: 10, marginTop: 10}}/>
      <ResultsList results={deployment.results}/>
    </MainContainer>
  )
}

Deployment.propTypes = {
  deployment: PropTypes.object.isRequired
}

export default Deployment;