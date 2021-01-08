import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainContainer from "../container/MainContainer";
import {makeStyles} from "@material-ui/core/styles";
import {getMyBrigade} from "../../actions/fantaBrigade";
import {Button, Divider, Typography} from "@material-ui/core";
import ParticipantAvatar from "../participant/ParticipantAvatar";
import EpisodeSelect from "../episode/EpisodesSelect";
import {getEpisodes} from "../../actions/episode";
import {createOrUpdateDeploymentPair, getEpisodeDeployment} from "../../actions/deployment";
import _ from 'lodash';
import clsx from "clsx";
import moment from "moment";

const useStyle = makeStyles(theme => ({
  episodesSelect: {
    minWidth: 60,
    fontSize: "1rem",
    marginBottom: 10
  },
  episodesSelectContainer: {
    float: "right"
  },
  avatar: {
    margin: 'auto'
  },
  avatarSelected: {
    border: '5px solid ' + theme.palette.secondary.main
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
}));

function getNextEpisodes(episodes) {
  const today = new Date();
  const todayTime = parseInt(moment().format('HHmm'))
  const includeToday = todayTime <= 1330;

  today.setHours(0, 0, 0, 0);
  const episodesFromToday = _.filter(episodes, (episode) => {
    const episodeDate = (new Date(episode.date));
    episodeDate.setHours(0, 0, 0, 0);
    return includeToday
      ? episodeDate >= today
      : episodeDate > today
  });
  return [episodesFromToday[0], episodesFromToday[1]]
}

function getCanModifyDeployment(selectedEpisodeNumber, episodes) {
  const selectedEpisode = episodes.find(x => x.number === selectedEpisodeNumber);
  if (!selectedEpisode) return false;

  const today = new Date();
  const todayTime = parseInt(moment().format('HHmm'));
  const includeToday = todayTime <= 1330;
  const episodeDate = (new Date(selectedEpisode.date));
  episodeDate.setHours(0, 0, 0, 0);

  return includeToday
    ? episodeDate >= today
    : episodeDate > today
}

function DeploymentDashboard(
  {
    episodes,
    myBrigade,
    currentDeployment,
    getEpisodes,
    getMyBrigade,
    getEpisodeDeployment,
    createOrUpdateDeploymentPair
  }) {
  const classes = useStyle();
  const [selectedEpisodes, setSelectedEpisodes] = useState("1-2");
  const [canSaveDeployment, setCanSaveDeployment] = useState(false);
  const [hasFourParticipantsSelected, setHasFourParticipantsSelected] = useState(false);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    getEpisodes();
    getMyBrigade();
  }, [getEpisodes, getMyBrigade]);

  useEffect(() => {
    if (episodes.length === 0) return;
    const nexEpisodes = getNextEpisodes(episodes);
    setSelectedEpisodes(nexEpisodes[0].number + "-" + nexEpisodes[1].number)
  }, [episodes])

  useEffect(() => {
    if (episodes.length === 0) return;
    if (!selectedEpisodes) return;
    const firstSelectedEpisodeNumber = parseInt(selectedEpisodes.split('-')[0])
    getEpisodeDeployment(firstSelectedEpisodeNumber);
    setCanSaveDeployment(getCanModifyDeployment(firstSelectedEpisodeNumber, episodes));
  }, [selectedEpisodes, episodes]);

  useEffect(() => {
    setHasFourParticipantsSelected(
      !!currentDeployment &&
      !!currentDeployment.participants &&
      currentDeployment.participants.length === 4
    );
    setParticipants(
      !_.isEmpty(currentDeployment)
        ? currentDeployment.participants.map(x => x._id)
       : []
    )
  }, [currentDeployment])

  const handleEpisodeChange = (episodeIds) => {
    setSelectedEpisodes(episodeIds);
  }

  const handleParticipantDeploy = (participant, deployed) => {
    if (!canSaveDeployment) return;
    if (deployed)
      _.remove(participants, (x) => x === participant._id);
    else if (participants.length < 4)
      participants.push(participant._id);

    setParticipants([...participants]);
    setHasFourParticipantsSelected(participants.length === 4);
  }

  const handleSaveDeployment = () => {
    const episodes = selectedEpisodes.split('-').map(x => parseInt(x));
    createOrUpdateDeploymentPair(episodes, participants, () => alert('Schieramento salvato'));
  }

  return (
    <MainContainer>
      <Typography variant={'h5'} component={'h5'} style={{marginBottom: 10}}>Schiera la brigata: </Typography>
      <Typography variant={'span'} component={'span'} style={{marginRight: 5, marginBottom: 10}}>
        Episodi:
      </Typography>
      <EpisodeSelect
        episodes={episodes}
        handleChange={handleEpisodeChange}
        selectedEpisode={selectedEpisodes}
        className={classes.episodesSelect}
      />
      <Button
        type={'button'}
        variant="contained"
        color="primary"
        onClick={handleSaveDeployment}
        style={{marginLeft: 15}}
        disabled={!(canSaveDeployment && hasFourParticipantsSelected)}
      >
        Salva schieramento
      </Button>
      <Divider style={{marginBottom: 10}}/>
      <div className={classes.participantsContainer}>
        {!!myBrigade.participants && myBrigade.participants.map(participant => {
          const deployed = participants.includes(participant._id);
          return (
            <div className={classes.participantContainer}
                 onClick={() => handleParticipantDeploy(participant, deployed)}>
              <ParticipantAvatar participant={participant} className={clsx({
                [classes.avatar]: true,
                [classes.avatarSelected]: deployed
              })}/>
              <Typography
                variant={'p'}
                component={'p'}
                align={'center'}>
                {participant.name + " " + participant.lastName}
              </Typography>
            </div>
          );
        })}
      </div>
    </MainContainer>
  )
}

const mapSateToProps = state => ({
  episodes: state.episode.episodes || [],
  myBrigade: state.fantaBrigade.myBrigade || {},
  currentDeployment: state.deployment.currentDeployment || []
});

export default connect(
  mapSateToProps,
  {getEpisodes, getMyBrigade, getEpisodeDeployment, createOrUpdateDeploymentPair})(DeploymentDashboard)