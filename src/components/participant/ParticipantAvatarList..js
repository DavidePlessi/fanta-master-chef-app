import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import ParticipantAvatar from "./ParticipantAvatar";
import clsx from "clsx";
import MainContainer from "../container/MainContainer";

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
    maxHeight: 'calc(100vh - 240px)',
    overflow: 'auto'
  },
  participantEliminatedName: {
    textDecoration: "line-through"
  },
}))

function ParticipantAvatarList({participants}){
  const classes = useStyle();
  return (
    <div className={classes.participantsContainer}>
      {!!participants && participants.map(participant => {
        if(!participant) return <></>;
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
  )
}

export default ParticipantAvatarList;