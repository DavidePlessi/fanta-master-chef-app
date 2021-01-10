import React from "react";
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from '@material-ui/icons/Face';
import {doLogout} from "../../actions/auth";
import {Divider} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {history} from "../../store";
import {makeStyles} from "@material-ui/core/styles";
import GroupIcon from '@material-ui/icons/Group';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import MovieIcon from '@material-ui/icons/Movie';
import GavelIcon from '@material-ui/icons/Gavel';


const useStyles = makeStyles(() => ({
  icon: {
    color: "#CD243B",
    marginRight: 5
  },
  menuItem: {
    "&:hover": {
      backgroundColor: "rgba(205,36,59, 0.4) !important"
    }
  }
}));

function UserMenu({t, doLogout, username}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogOut = () => {
    doLogout();
    handleClose();
  }
  const handleGoTo = (path) => {
    history.push(path);
    handleClose();
  }

  return(
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          {" "}
          <FaceIcon className={classes.icon}/>
          {username}
        </MenuItem>
        <Divider style={{marginBottom: 10}}/>
        <MenuItem onClick={() => handleGoTo("/ranking")} className={classes.menuItem}>
          {" "}
          <GavelIcon className={classes.icon}/>
          Classifica
        </MenuItem>
        <MenuItem onClick={() => handleGoTo("/my-brigade")} className={classes.menuItem}>
          {" "}
          <GroupIcon className={classes.icon}/>
          La mia brigata
        </MenuItem>
        <MenuItem onClick={() => handleGoTo("/episodes")} className={classes.menuItem}>
          {" "}
          <MovieIcon className={classes.icon}/>
          Episodi
        </MenuItem>
        <MenuItem onClick={() => handleGoTo("/participants")} className={classes.menuItem}>
          {" "}
          <RecentActorsIcon className={classes.icon}/>
          Concorrenti
        </MenuItem>
        <MenuItem onClick={() => handleGoTo("/deploy-brigade")} className={classes.menuItem}>
          {" "}
          <LowPriorityIcon className={classes.icon}/>
          Schiera brigata
        </MenuItem>
        <Divider style={{marginBottom: 10}}/>
        <MenuItem onClick={() => handleLogOut()} className={classes.menuItem}>
          {" "}
          <ExitToAppIcon className={classes.icon}/>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

const mapStateProps = state => ({
  username: state.auth.user.name
})

export default connect(mapStateProps, {
  doLogout
})(UserMenu)