import React, {Suspense, useEffect} from "react";
import './App.css';
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import {Provider} from "react-redux";
import { ThemeProvider } from '@material-ui/core/styles';

import PrivateRoute from "./components/routing/PrivateRoute";
import i18n from "i18next";
import {store, history} from "./store";
import Login from "./components/auth/Login";
import {loadUser} from "./actions/auth";
import theme from "./theme";

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={null}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path='/login' component={Login}/>
                <PrivateRoute exact path='/' component={() => <h1>HELLOWW!!!</h1>}/>
                <PrivateRoute exact path='/episodes'/>
                <PrivateRoute exact path='/my-brigade'/>
                <PrivateRoute exact path='/deploy-brigade'/>
                <PrivateRoute exact path='/participants'/>
              </Switch>
            </ConnectedRouter>
          </Suspense>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
