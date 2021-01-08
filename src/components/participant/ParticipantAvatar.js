import {Avatar} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import getParticipantImage from "../../utils/getParticipantImage";

const useStyle = makeStyles(theme => ({
  participantListItemAvatar: {
    width: 50,
    height: 50,
    border: "1px solid " + theme.palette.primary.main
  },
  participantActiveListItemAvatar: {
    backgroundColor: theme.palette.primary.main
  },
  participantEliminatedImage: {
    filter: "grayscale(100%)"
  }
}));

export default function ParticipantAvatar({participant, className}) {
  const classes = useStyle();
  const img = getParticipantImage(participant.imgName);
  return (
    <Avatar
      aria-label={'recipe'}
      className={clsx({
        [classes.participantListItemAvatar]: true,
        [classes.participantActiveListItemAvatar]: !participant.eliminated
      }, className)}>
      <img
        className={clsx({
          [classes.participantEliminatedImage]: participant.eliminated
        })}
        src={img}
        alt={"Participant Image"}
        width={80}
        height={56}
      />
    </Avatar>
  )
}