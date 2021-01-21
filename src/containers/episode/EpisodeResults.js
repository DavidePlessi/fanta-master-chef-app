import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Typography} from "@material-ui/core";
import _ from 'lodash';
import MainContainer from "../../components/container/MainContainer";
import Button from "@material-ui/core/Button";
import ParticipantAvatar from "../../components/participant/ParticipantAvatar";
import clsx from "clsx";
import ParticipantAvatarList from "../../components/participant/ParticipantAvatarList.";
import {getEpisode} from "../../actions/episode";
import {connect} from "react-redux";

const useStyle = makeStyles(theme => ({
  participantsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 'calc(100vh - 240px)',
    overflow: 'auto'
  },
  spanWinnerBrigade: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'green'
  }
}));

function EpisodeResults({episode, getEpisode, match}) {
  const classes = useStyle();

  useEffect(() => {
    const {
      editionNumber,
      episodeNumber
    } = match.params;
    getEpisode(editionNumber, episodeNumber)
  }, [getEpisode, match]);

  if (_.isEmpty(episode))
    return (
      <Typography
        variant={'h5'}
        component={'h5'}
      >
        Loading...
      </Typography>
    )

  const body = !episode.isOutside
    ? (
      <>
        <MainContainer>
          <Typography variant={'h4'} component={'h4'} style={{marginBotton: 10}}>
            Mystery box
          </Typography>
          <Divider style={{marginBottom: 10}}/>
          <Typography variant={'h5'} component={'h5'} style={{marginBotton: 10}}>
            Migliori
          </Typography>
          <ParticipantAvatarList participants={episode.mysteryBoxPodium}/>
          <Divider style={{marginBottom: 10}}/>
          <Typography variant={'h5'} component={'h5'} style={{marginBotton: 10}}>
            Vincitore
          </Typography>
          <ParticipantAvatarList participants={[episode.mysteryBoxPodium[0]]}/>
        </MainContainer>
        <Divider style={{marginBottom: 10}}/>
        <MainContainer>
          <Typography variant={'h4'} component={'h4'} style={{marginBotton: 10}}>
            Invention test
          </Typography>
          <Divider style={{marginBottom: 10}}/>
          <Typography variant={'h5'} component={'h5'} style={{marginBotton: 10}}>
            Peggiori
          </Typography>
          <ParticipantAvatarList participants={episode.inventionTestWorst}/>
          <Divider style={{marginBottom: 10}}/>
          <Typography variant={'h5'} component={'h5'} style={{marginBotton: 10}}>
            Vincitore
          </Typography>
          <ParticipantAvatarList participants={[episode.inventionTestPodium[0]]}/>
        </MainContainer>
      </>
    ) : (
      <>
        <MainContainer>
          <Typography variant={'h4'} component={'h4'} style={{marginBotton: 10}}>
            Esterna
          </Typography>
          <Divider style={{marginBottom: 10}}/>
          <Typography variant={'h5'} component={'h5'} style={{marginBotton: 10}}>
            Brigata rossa {episode.redBrigadeWins !== undefined && episode.redBrigadeWins
            ? <span className={classes.spanWinnerBrigade}> (VINCE)</span>
            : ''}
          </Typography>
          <ParticipantAvatarList participants={episode.redBrigade}/>
          <Divider style={{marginBottom: 10}}/>
          <Typography variant={'h5'} component={'h5'} style={{marginBotton: 10}}>
            Brigata blu {episode.redBrigadeWins !== undefined && !episode.redBrigadeWins
            ? <span className={classes.spanWinnerBrigade}> (VINCE)</span>
            : ''}
          </Typography>
          <ParticipantAvatarList participants={episode.blueBrigade}/>
        </MainContainer>
        <Divider style={{marginBottom: 10}}/>
        <MainContainer>
          <Typography variant={'h4'} component={'h4'} style={{marginBotton: 10}}>
            Pressure test
          </Typography>
          <Divider style={{marginBottom: 10}}/>
          <ParticipantAvatarList participants={episode.pressureTest}/>
        </MainContainer>
      </>
    )
  return (
    <>
      <MainContainer>
        <Typography variant={'h3'} component={'h3'}>
          Risultati episodio {episode.number}
        </Typography>
      </MainContainer>
      <Divider style={{marginBottom: 10}}/>
      {body}
      <Divider style={{marginBottom: 10}}/>
      <MainContainer>
        <Typography variant={'h4'} component={'h4'} style={{marginBotton: 10}}>
          Eliminati
        </Typography>
        {!episode.eliminated || episode.eliminated.length === 0
          ?  <Typography variant={'h6'} component={'h6'}>
              Nessuno
            </Typography>
          : <ParticipantAvatarList participants={episode.eliminated}/>
        }
      </MainContainer>
    </>
  )
}

const mapStateToProps = state => ({
  episode: state.episode.currentEpisode
})

export default connect(mapStateToProps, {getEpisode})(EpisodeResults)