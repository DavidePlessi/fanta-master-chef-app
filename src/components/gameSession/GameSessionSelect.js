import React from "react";
import {MenuItem, Select} from "@material-ui/core";
import {connect} from "react-redux";
import {setCurrentGameSession} from "../../actions/gameSession";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  select: {
    color: 'white',
    marginLeft: 20,
    '&::before': {
      borderColor: 'white'
    }
  },
  icon: {
    color: 'white'
  }
}))

function GameSessionSelect({userGameSessions, selectedGameSession, setCurrentGameSession}) {
  const classes = useStyle();
  const handleChange = (value) => {
    const gameSession = userGameSessions.find(x => x._id === value);
    setCurrentGameSession(gameSession, true);
  }

  if(userGameSessions.length <= 1) return <></>

  return (
    <Select
      value={selectedGameSession._id ?? ""}
      onChange={(e) => handleChange(e.target.value)}
      className={classes.select}
      classes={{
        icon: classes.icon,
      }}
    >
      {userGameSessions.map((x) => {
        return (
          <MenuItem value={x._id} key={x._id}>
            {x.name}
          </MenuItem>
        )
      })}
    </Select>
  )
}

const mapStateToProps = state => ({
  userGameSessions: state.gameSession.gameSessions || [],
  selectedGameSession: state.gameSession.currentGameSession || {}
})

export default connect(mapStateToProps, {setCurrentGameSession})(GameSessionSelect)