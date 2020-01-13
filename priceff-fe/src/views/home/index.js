import {connect} from 'react-redux';

import {HomePage as Component} from './home';
import * as populationActions from 'core/store/modules/populations/populations.actions';
import {currentPopulation, populationsIdsList} from 'core/store/modules/populations/populations.selector';

const mapStateToProps = (state) => ({
  currentPopulation: currentPopulation(state),
  populationsIdsList: populationsIdsList(state)
});

const mapDispatchToProps = (dispatch) => ({
  generatePopulation: (populationName) => dispatch(populationActions.generatePopulation(populationName)),
  getPopulation: (populationId) => dispatch(populationActions.getPopulation(populationId))
});

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);