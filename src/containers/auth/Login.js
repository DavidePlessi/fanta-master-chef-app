import React, {Fragment, useState} from "react";
import {doLogin} from "../../actions/auth";
import {connect} from 'react-redux';
import {
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import {Redirect} from "react-router-dom";

import _ from 'lodash'
import MainContainer from "../../components/container/MainContainer";
import FeedbackLoading from "../../components/layout/FeedbackLoading";
import FeedbackMessage from "../../components/layout/FeedbackMessage";

const Login = ({doLogin, user, redirectTo}) => {
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
    console.log('AFTER LOGIN ', redirectTo);
    return <Redirect to={redirectTo}/>
  }

  return (
    <>
      <FeedbackLoading/>
      <FeedbackMessage/>
      <MainContainer maxWidth={600}>
        <Typography
          variant="h4"
          component="h4"
          align={"center"}
          style={{marginBottom: 10, fontFamily: "Saira Extra Condensed"}}
        >
          Log in
        </Typography>
        <form onSubmit={(e) => onSubmit(e)}>
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
              <Button type={"submit"} variant="contained" color="primary"
                      style={{marginLeft: "calc(50% - 39px)", width: 78}}>
                {'Login'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </MainContainer>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  redirectTo: !!state.router.location.query
    ? state.router.location.query.redirectTo || '/'
    : '/'
})

export default connect(
  mapStateToProps,
  {doLogin}
)(Login);

