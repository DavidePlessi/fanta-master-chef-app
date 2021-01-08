import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainContainer from "../container/MainContainer";
import {makeStyles} from "@material-ui/core/styles";
import {getMyBrigade} from "../../actions/fantaBrigade";
import {Divider, Grid, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import ParticipantAvatar from "../participant/ParticipantAvatar";

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
    maxHeight: 'calc(100vh - 250px)'
  },
  mainContainer: {
    overflow: 'auto'
  }

}));

function MyBrigade({myBrigade, getMyBrigade}) {
  const classes = useStyle();

  useEffect(() => {
    getMyBrigade()
  }, [getMyBrigade]);

  return (
    <MainContainer className={classes.mainContainer}>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <Typography variant={'h5'} component={'h5'} style={{marginBottom: 10}}>Concorrenti della brigata:</Typography>
          <Divider style={{marginBottom: 10}}/>
          <div className={classes.participantsContainer}>
            {!!myBrigade.participants && myBrigade.participants.map(participant => (
              <div className={classes.participantContainer}>
                <ParticipantAvatar participant={participant} className={classes.avatar}/>
                <Typography variant={'p'} component={'p'} align={'center'}>{participant.name + " " + participant.lastName}</Typography>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item={true} xs={12}>
          <List>
            {!!myBrigade.results && myBrigade.results.map(result => {
              return (
                <ListItem>
                  <ListItemText>result</ListItemText>
                </ListItem>
              )
            })}
          </List>
        </Grid>
      </Grid>
    </MainContainer>
  )

}

MyBrigade.propTypes = {
  myBrigade: PropTypes.object.isRequired,
  getMyBrigade: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  myBrigade: state.fantaBrigade.myBrigade
})

export default connect(mapStateToProps, {getMyBrigade})(MyBrigade)