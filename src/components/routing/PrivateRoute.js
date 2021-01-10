import React, {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import _ from 'lodash'
import Layout from "../layout/Layout";
import {history} from "../../store";

const PrivateRoute = (
  {
    component: Component,
    auth: {user},
    ...rest
  }) => {
  const canAccess = !_.isEmpty(user);


  if(!canAccess) {
    const redirectTo = {...window.location}.pathname;
    return <Redirect to={'/login' + (!!redirectTo ? '?redirectTo=' + redirectTo : '')}/>
  }

  return  <Route
      {...rest}
      render={props =>(
        <Layout>
          <Component {...props}/>
        </Layout>
        )
      }
    />
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
