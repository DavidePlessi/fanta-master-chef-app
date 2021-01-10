import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainContainer from "../container/MainContainer";
import {makeStyles} from "@material-ui/core/styles";
import {getFantaBrigades} from "../../actions/fantaBrigade";
import {Divider, Typography} from "@material-ui/core";
import ParticipantAvatar from "../participant/ParticipantAvatar";
import clsx from "clsx";
import Deployment from "../deployment/Deployment";

const useStyle = makeStyles(theme => ({
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
  avatar: {
    margin: 'auto'
  },
  pointSpan: {
    color: theme.palette.primary.main
  }
}));

function Ranking({brigades, getFantaBrigades}){
  const classes = useStyle();
  useEffect(() => {
    getFantaBrigades()
  }, [getFantaBrigades]);

  if(!brigades && brigades.length > 0){
    return <MainContainer>
      <Typography variant={'h3'} component={'h3'}>Loading...</Typography>
    </MainContainer>
  }

  return (
    <>
      <MainContainer>
        <Typography variant={'h4'} component={'h4'} style={{marginBottom: 10}}>
          Classifica
        </Typography>
      </MainContainer>
      <Divider style={{marginBottom: 10, marginTop: 10}}/>
      {!!brigades && brigades.map(brigade => {
        return (
          <>
            <MainContainer>
              <Typography
                variant={'h5'}
                component={'h5'}
                style={{marginBottom: 10}}>
                {brigade.name}
                <span className={classes.pointSpan}>
                {(!!brigade.resultsPoint ? ' - ' + brigade.resultsPoint + ' punti' : '')}
              </span>
              </Typography>
              <Divider style={{marginBottom: 10}}/>
              <div className={classes.participantsContainer}>
                {!!brigade.participants && brigade.participants.map(participant => {
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
            </MainContainer>
            <Divider style={{marginBottom: 10, marginTop: 10}}/>
          </>
        )
      })}
    </>
  )
}

Ranking.propTypes = {
  brigades: PropTypes.array.isRequired,
  getAllBrigades: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  brigades: state.fantaBrigade.brigades
});

export default connect(mapStateToProps, {getFantaBrigades})(Ranking)