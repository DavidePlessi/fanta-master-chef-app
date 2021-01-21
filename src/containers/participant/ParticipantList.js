import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainContainer from "../../components/container/MainContainer";
import { makeStyles } from "@material-ui/core/styles";
import {Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {getParticipants} from "../../actions/participant";
import clsx from "clsx";
import getParticipantImage from "../../utils/getParticipantImage";
import ParticipantAvatar from "../../components/participant/ParticipantAvatar";

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
    height: 50,
    border: "1px solid " + theme.palette.primary.main
  },
  participantActiveListItemAvatar:{
    backgroundColor: theme.palette.primary.main
  },
  dateSpan: {
    color: theme.palette.primary.main + " !important",
    fontWeight: 800,
    fontSize: "1rem"
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
        <Typography variant={'h5'} component={'h5'} style={{marginBottom: 10}}>Concorrenti:</Typography>
        <Divider style={{marginBottom: 10}}/>
        <List className={classes.participantList}>
          {participants.map(participant => {
            return (<ListItem>
              <ListItemIcon>
                <ParticipantAvatar participant={participant}/>
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