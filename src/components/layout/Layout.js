import React, {Fragment} from "react";
import {Toolbar, Typography, AppBar, Container} from "@material-ui/core";
import UserMenu from "./UserMenu";
import TopBarTitle from "./TopBarTitle";
import Logo from '../../img/logo.png'


const Layout = ({children, maxWidth}) => {
  return (
    <Fragment>
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
          </div>
          <div style={{position: "fixed", top: 4, right: 10}}>
            <UserMenu/>
          </div>
        </Toolbar>
      </AppBar>
      <Container style={{
        marginTop: 80,
        maxWidth: maxWidth,
        padding: 20,
        border: "1px solid #CD243B",
        boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.75)",
        backgroundColor: "rgba(255, 255, 255, .8)"
      }}>
        {children}
      </Container>
    </Fragment>
  )

}
export default Layout