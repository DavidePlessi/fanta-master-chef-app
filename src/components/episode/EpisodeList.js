import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainContainer from "../container/MainContainer";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {getEpisodes} from "../../actions/episode";
import clsx from "clsx";
import moment from "moment";
import {history} from "../../store";

const useStyle = makeStyles(theme => ({
  episodeListContainer: {
    maxWidth: "100%"
  },
  episodeList: {
    maxHeight: "calc(100vh - 250px)",
    width: "100%",
    overflow: "auto"
  },
  episodeListItem: {},
  episodeListItemAvatar: {},
  episodeIncomingListItemAvatar: {
    backgroundColor: theme.palette.primary.main
  },
  episodeTodayListItemAvatar: {
    backgroundColor: theme.palette.secondary.main
  },
  dateSpan: {
    color: theme.palette.primary.main + " !important",
    fontWeight: 800,
    fontSize: "1rem"
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(225, 195, 64,.6)'
    }
  }
}));

function EpisodeList({episodes, getEpisodes}) {
  const classes = useStyle();

  useEffect(() => {
    getEpisodes();
  }, [getEpisodes])

  const handleEpisodeClick = (episode) => {
    const url = '/episode/' + episode.editionNumber + '/' + episode.number;
    history.push(url);
  }

  return (
    <>
      <MainContainer className={classes.episodeListContainer}>
        <Typography variant={'h5'} component={'h5'} style={{marginBottom: 10}}>Episodi:</Typography>
        <Divider style={{marginBottom: 10}}/>
        <List className={classes.episodeList}>
          {episodes.map(episode => {
            const episodeDate = (new Date(episode.date));
            episodeDate.setHours(0, 0, 0, 0);

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const isIncoming = episodeDate > today;
            const isToday = episodeDate.toDateString() === today.toDateString();
            const time = episode.number % 2 === 0 ? " 22:25" : " 21:15"
            const episodeDateString = moment(episodeDate).format("DD/MM/YYYY")
            console.log(isIncoming);
            return (
              <ListItem onClick={() => handleEpisodeClick(episode)} className={classes.listItem}>
                <ListItemIcon>
                  <Avatar
                    aria-label={'recipe'}
                    className={clsx({
                      [classes.episodeListItemAvatar]: true,
                      [classes.episodeIncomingListItemAvatar]: isIncoming,
                      [classes.episodeTodayListItemAvatar]: isToday,
                    })}>
                    {episode.number}
                  </Avatar>
                </ListItemIcon>
                <ListItemText>
                  <span className={classes.dateSpan}>{episodeDateString + time}</span> - {episode.description}
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
      </MainContainer>
    </>
  )
}

EpisodeList.propTypes = {
  episodes: PropTypes.array.isRequired,
  getEpisodes: PropTypes.func.isRequired
}
EpisodeList.defaultProps = {
  episodes: []
}
const mapStateToProps = state => ({
  episodes: state.episode.episodes || []
})

export default connect(mapStateToProps, {getEpisodes})(EpisodeList)