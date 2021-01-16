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
import BrigadeWithResults from "./BrigadeWithResults";

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
            <BrigadeWithResults brigade={brigade}/>
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