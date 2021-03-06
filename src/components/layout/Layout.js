import React, {Fragment} from "react";
import {Toolbar, Typography, AppBar, Container} from "@material-ui/core";
import UserMenu from "./UserMenu";
import TopBarTitle from "./TopBarTitle";
import Logo from '../../img/logo.png'
import FeedbackLoading from "./FeedbackLoading";
import FeedbackMessage from "./FeedbackMessage";
import GameSessionSelect from "../gameSession/GameSessionSelect";


const Layout = ({children, maxWidth}) => {
  return (
    <Fragment>
      <FeedbackLoading/>
      <FeedbackMessage/>
      <AppBar position="fixed" style={{backgroundColor: "#CD243B"}}>
        <Toolbar>
          <img src={Logo} width={36} height={36} alt={"logo"}/>
          <Typography variant="h6" style={{
            marginLeft: 15,
            maxHeight: 65,
            overflowY: "auto",
            wordWrap: "break-word",
            fontFamily: "'Titillium Web', sans-serif !important"
          }}>
            <TopBarTitle/>
          </Typography>
          <div style={{width: 100}}>
            <GameSessionSelect/>
          </div>
          <div style={{position: "fixed", top: 4, right: 10}}>
            <UserMenu/>
          </div>
        </Toolbar>
      </AppBar>
      <Container style={{
        marginTop: 60,
        maxWidth: maxWidth,
        padding: 20,
        backgroundColor: "transparent"
      }}>
        {children}
      </Container>
    </Fragment>
  )

}
export default Layout