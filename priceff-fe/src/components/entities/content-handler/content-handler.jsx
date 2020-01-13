import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

// React Router
import {Route, Switch} from 'react-router-dom';
import {routes} from 'core/config/routes';
import {ConnectedRouter} from 'connected-react-router';

//  Environment variables
import {checkENVValidity} from 'helpers/env';

// Components
import {HomePage} from 'views/home';
import {ErrorCatcher} from 'components/entities/error-catcher';

export class UContentHandler extends Component {

constructor(props) {
  super(props);
  this.state = {
  };
};

componentDidMount () {
  checkENVValidity();
}



render() {
  const {history} = this.props;

  return (
    <ConnectedRouter history={history}>
      <ErrorCatcher
        errorPage={<div>Error Page</div>}
        errors={{}}
        >
        <Fragment>
          <Switch>
            <Route
              exact
              path={routes.home.path}
              component={HomePage}
            />
          </Switch>
        </Fragment>
      </ErrorCatcher>
    </ConnectedRouter>
  );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export const ContentHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(UContentHandler);