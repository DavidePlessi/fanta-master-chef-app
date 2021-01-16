import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MainContainer from "../container/MainContainer";
import {Divider, Grid, Typography} from "@material-ui/core";
import ParticipantAvatar from "../participant/ParticipantAvatar";
import clsx from "clsx";
import ResultsList from "../deployment/ResultsList";
import _ from 'lodash';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const useStyle = makeStyles(theme => ({
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
    maxHeight: 'calc(100vh - 250px)'
  },
  mainContainer: {
    overflow: 'auto'
  },
  participantEliminatedName: {
    textDecoration: "line-through"
  },
  pointSpan: {
    color: theme.palette.primary.main
  }
}))

function BrigadeWithResutls({brigade}) {
  const classes = useStyle();
  if(_.isEmpty(brigade))
    return (
      <Typography
        variant={'h5'}
        component={'h5'}
        style={{marginBottom: 10}}>
        Loading...
      </Typography>
    )
  return (
    <MainContainer className={classes.mainContainer}>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <Typography
            variant={'h5'}
            component={'h5'}
            style={{marginBottom: 10}}>
            {brigade.name}{' - '}
            <span className={classes.pointSpan}>
                {((brigade.results.resultsPoint || 0) + ' punti')}
              </span>
          </Typography>
          <Divider style={{marginBottom: 10}}/>
          <div className={classes.participantsContainer}>
            {!!brigade.participants && brigade.participants.map(participant => (
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
            ))}
          </div>
        </Grid>
        <Grid item={true} xs={12} style={{paddingTop: 30}}>
          <Accordion>
            <AccordionSummary>
              <Typography variant={'h5'} component={'h5'}>
                Risultati:
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{display: 'block'}}>
              {!!brigade.results &&
              !!brigade.results.results &&
              brigade.results.results
                .filter(x => x.results.length > 0)
                .map(res => {
                  return <ResultsList results={res} showEpisodeWithTotals={true}/>
                })}
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </MainContainer>
  )
}

export default BrigadeWithResutls;