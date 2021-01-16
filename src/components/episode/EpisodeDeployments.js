import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {getEpisodeWithDeployments} from "../../actions/episode";
import MainContainer from "../container/MainContainer";
import {Divider, IconButton, Typography} from "@material-ui/core";
import moment from "moment";
import _ from 'lodash';
import Deployment from "../deployment/Deployment";
import {history} from "../../store";
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(theme => ({
  dateSpan: {
    color: theme.palette.primary.main + " !important",
    fontWeight: 800,
    fontSize: "1rem"
  }
}));

function EpisodeDeployments(
  {
    episode,
    getEpisodeWithDeployments,
    match
  }
) {
  const classes = useStyle();
  useEffect(() => {
    const {
      editionNumber,
      episodeNumber
    } = match.params;
    getEpisodeWithDeployments(editionNumber, episodeNumber);
  }, [match, getEpisodeWithDeployments])

  const goToResults = () => {
    const {
      editionNumber,
      episodeNumber
    } = match.params;
    history.push('/episode-results/' + editionNumber + '/' + episodeNumber)
  }

  if (_.isEmpty(episode)) {
    return <MainContainer>
      <Typography variant={'h4'} component={'h4'} style={{marginBottom: 10}}>
        Loading...
      </Typography>
    </MainContainer>
  }

  const episodeDateString = moment((new Date(episode.date))).format("DD/MM/YYYY");
  const time = episode.number % 2 === 0 ? " 22:25" : " 21:15"
  return (
    <>
      <MainContainer>
        <Typography variant={'h4'} component={'h4'} style={{marginBottom: 10}}>
          Episodio {episode.number}
        </Typography>
        <Divider style={{marginBottom: 10}}/>
        <IconButton onClick={goToResults} color={'primary'}>
          <SearchIcon/>
        </IconButton>
        <span className={classes.dateSpan}>{' ' + episodeDateString + time}</span> - {episode.description}
      </MainContainer>
      <Divider style={{marginBottom: 10, marginTop: 10}}/>
      {!!episode.deployments && episode.deployments.map(deployment => {
        return (
          <>
            <Deployment deployment={deployment}/>
            <Divider style={{marginBottom: 10, marginTop: 10}}/>
          </>
        );
      })}
    </>
  )
}

EpisodeDeployments.propTypes = {
  currentEpisodeWithDeployments: PropTypes.object.isRequired,
  getEpisodeWithDeployment: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  episode: state.episode.currentEpisodeWithDeployments
})

export default connect(mapStateToProps, {getEpisodeWithDeployments})(EpisodeDeployments)