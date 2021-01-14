import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {getEpisodeWithDeployments, saveEpisodeResults} from "../../actions/episode";
import {getParticipants} from "../../actions/participant";
import ParticipantTransferList from "../participant/ParticipantTransferList";
import MainContainer from "../container/MainContainer";
import {Divider, FormControlLabel, Grid, Switch, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import EpisodeSelect from "./EpisodesSelect";

const useStyle = makeStyles(theme => ({

}));

const populateParticipant = (participantIds, participants) => {
  return !participantIds || participantIds.length <= 0
    ? []
    : participantIds.map(x => participants.find(y => y._id === x));
}

function EpisodeDetails(
  {
    episode,
    participants,
    getEpisodeWithDeployments,
    getParticipants,
    saveEpisodeResults,
    match
  }
) {
  const [mysteryBoxPodium, setMysteryBoxPodium] = useState([]);
  const [mysteryBoxWorst, setMysteryBoxWorst] = useState([]);
  const [inventionTestPodium, setInventionTestPodium] = useState([]);
  const [inventionTestWorst, setInventionTestWorst] = useState([]);
  const [redBrigade, setRedBrigade] = useState([]);
  const [blueBrigade, setBlueBrigade] = useState([]);
  const [redBrigadeWins, setRedBrigadeWins] = useState(false);
  const [pressureTest, setPressureTest] = useState([]);
  const [eliminated, setEliminated] = useState([]);

  useEffect(() => {
    const {
      editionNumber,
      episodeNumber
    } = match.params;
    getEpisodeWithDeployments(editionNumber, episodeNumber);
    getParticipants();
  }, [getEpisodeWithDeployments, getParticipants, match]);

  useEffect(() => {
    setMysteryBoxPodium(populateParticipant(episode.mysteryBoxPodium, participants));
    setMysteryBoxWorst(populateParticipant(episode.mysteryBoxWorst, participants));
    setInventionTestPodium(populateParticipant(episode.inventionTestPodium, participants));
    setInventionTestWorst(populateParticipant(episode.inventionTestWorst, participants));
    setRedBrigade(populateParticipant(episode.redBrigade, participants));
    setBlueBrigade(populateParticipant(episode.blueBrigade, participants));
    setPressureTest(populateParticipant(episode.pressureTest, participants));
    setEliminated(populateParticipant(episode.eliminated, participants));
    setRedBrigadeWins(episode.redBrigadeWins);
  }, [episode, participants]);

  const handleSaveEpisode = () => {
    saveEpisodeResults({
      number: episode.number,
      editionNumber: episode.editionNumber,
      mysteryBoxPodium,
      mysteryBoxWorst,
      inventionTestPodium,
      inventionTestWorst,
      redBrigade,
      blueBrigade,
      redBrigadeWins,
      pressureTest,
      eliminated
    })
  }

  return (
    <MainContainer>
      <Typography variant={'h5'} component={'h5'} style={{marginBottom: 10}}>
        Dettagli episodio {episode.number}
      </Typography>
      <Button
        type={'button'}
        variant="contained"
        color="primary"
        onClick={handleSaveEpisode}
        style={{marginLeft: 15}}
      >
        Salva Episodio
      </Button>
      <Divider style={{marginBottom: 10}}/>
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={mysteryBoxPodium}
        setSelectedParticipants={setMysteryBoxPodium}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Podio Mystery Box'}
      />
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={mysteryBoxWorst}
        setSelectedParticipants={setMysteryBoxWorst}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Peggiori Mystery Box'}
      />
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={inventionTestPodium}
        setSelectedParticipants={setInventionTestPodium}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Podio Invention Test'}
      />
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={inventionTestWorst}
        setSelectedParticipants={setInventionTestWorst}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Peggiori Invention Test'}
      />
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={redBrigade}
        setSelectedParticipants={setRedBrigade}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Brigata rossa'}
      />
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={blueBrigade}
        setSelectedParticipants={setBlueBrigade}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Brigata blu'}
      />
      <div>
        <FormControlLabel
          style={{width: 160, marginLeft: 'calc(50% - 80px)'}}
          control={
            <Switch
              checked={redBrigadeWins}
              onChange={(e) => setRedBrigadeWins(e.target.checked)}
              color="primary"
            />
          }
          label="Vince la brigata rossa"
        />
      </div>
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={pressureTest}
        setSelectedParticipants={setPressureTest}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Al pressure'}
      />
      <ParticipantTransferList
        participants={participants}
        selectedParticipants={eliminated}
        setSelectedParticipants={setEliminated}
        firstListTitle={'Partecipanti'}
        secondListTitle={'Eliminati'}
      />
    </MainContainer>
  )

}

EpisodeDetails.propTypes = {
  episode: PropTypes.object.isRequired,
  participants: PropTypes.array.isRequired,
  getEpisodeWithDeployments: PropTypes.func.isRequired,
  getParticipants: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  episode: state.episode.currentEpisodeWithDeployments,
  participants: state.participant.participants
});

export default connect(mapStateToProps,
  {getEpisodeWithDeployments, getParticipants, saveEpisodeResults})(EpisodeDetails)