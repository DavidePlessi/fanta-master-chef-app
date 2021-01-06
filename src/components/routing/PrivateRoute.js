import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import _ from 'lodash'
import Layout from "../layout/Layout";

const PrivateRoute = (
  {
    component: Component,
    auth: {user},
    ...rest
  }) => {
  const canAccess = !_.isEmpty(user);
  return canAccess
    ? <Route
      {...rest}
      render={props =>(
        <Layout>
          <Component {...props}/>
        </Layout>
        )
      }
    />
    : <Redirect to={'/login'}/>
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
