import React, {useState} from "react";
import {doLogin} from "../../actions/auth";
import {connect} from 'react-redux';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import {Redirect} from "react-router-dom";

import _ from 'lodash'

const Login = ({doLogin, user}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = () => email.length > 0 && password.length > 0;

  const handleEmailChange = (value) => {
    setEmail(value);
  }
  const handlePasswordChange = (value) => {
    setPassword(value)
  }

  const onSubmit = async e => {
    e.preventDefault();
    if (!isValid()) return;
    doLogin(email, password);
  };

  if (!_.isEmpty(user)) {
    return <Redirect to='/'/>
  }

  return (
    <Container style={{
      marginTop: 100,
      maxWidth: 600,
      padding: 20,
      border: "1px solid #CD243B",
      boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.75)",
      backgroundColor: "rgba(255, 255, 255, .8)"
    }}>
      <Typography
        variant="h4"
        component="h4"
        align={"center"}
        style={{marginBottom: 10, fontFamily: "Saira Extra Condensed"}}
      >
        Log in
      </Typography>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <TextField
            fullWidth
            required={true}
            inputProps={{
              autoComplete: "nofill"
            }}
            onChange={e => handleEmailChange(e.target.value)}
            label={'Email'}
            value={email}
          />

        </Grid>
        <Grid item={true} xs={12}>
          <TextField
            fullWidth
            required={true}
            inputProps={{
              autoComplete: "nofill"
            }}
            onChange={e => handlePasswordChange(e.target.value)}
            label={'Password'}
            value={password}
            type="password"
          />
        </Grid>
        <Grid item={true} xs={12} alignContent={"center"} alignItems={"center"}>
          <Button onClick={(e) => onSubmit(e)} variant="outlined" color="primary"
                  style={{marginLeft: "calc(50% - 39px)", width: 78}}>
            {'Login'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  {doLogin}
)(Login);

