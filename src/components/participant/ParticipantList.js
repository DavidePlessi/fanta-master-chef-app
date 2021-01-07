import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainContainer from "../container/MainContainer";
import { makeStyles } from "@material-ui/core/styles";
import {Avatar, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {getParticipants} from "../../actions/participant";
import clsx from "clsx";
import getParticipantImage from "../../utils/getParticipantImage";

const useStyle = makeStyles(theme => ({
  participantListContainer: {
    maxWidth: "100%"
  },
  participantList: {
    maxHeight: "calc(100vh - 250px)",
    width: "100%",
    overflow: "auto"
  },
  participantListItem: {

  },
  participantListItemAvatar: {
    width: 50,
    height: 50
  },
  participantActiveListItemAvatar:{
    backgroundColor: theme.palette.primary.main
  },
  dateSpan: {
    color: theme.palette.primary.main + " !important",
    fontWeight: 800,
    fontSize: "1rem"
  },
  participantEliminatedImage: {
    filter: "grayscale(100%)"
  }
}));

function ParticipantList({participants, getParticipants}) {
  const classes = useStyle();

  useEffect(() => {
    getParticipants();
  }, [getParticipants])

  return (
    <>
      <MainContainer className={classes.participantListContainer}>
        <Typography variant={"h3"} component={"h3"} align={"center"}>
          Partecipanti
        </Typography>
        <List className={classes.participantList}>
          {participants.map(participant => {
            const img = getParticipantImage(participant.imgName);
            return (<ListItem>
              <ListItemIcon>
                <Avatar
                  aria-label={'recipe'}
                  className={clsx({
                    [classes.participantListItemAvatar]: true,
                    [classes.participantActiveListItemAvatar]: !participant.eliminated
                  })}>
                  <img
                    className={clsx({
                      [classes.participantEliminatedImage]: participant.eliminated
                    })}
                    src={img}
                    alt={"immagine"}
                    width={80}
                    height={56}
                  />
                </Avatar>
              </ListItemIcon>
              <ListItemText>
                <span className={classes.dateSpan}>{participant.name + ' ' + participant.lastName}</span> - {participant.description}
              </ListItemText>
            </ListItem>)
          })}
        </List>
      </MainContainer>
    </>
  )
}

ParticipantList.propTypes = {
  participants: PropTypes.array.isRequired,
  getParticipants: PropTypes.func.isRequired
}
ParticipantList.defaultProps = {
  participants: []
}
const mapStateToProps = state => ({
  participants: state.participant.participants || []
})

export default connect(mapStateToProps, {getParticipants})(ParticipantList)