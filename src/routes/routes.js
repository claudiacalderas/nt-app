import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InputContainer from '../components/inputContainer/InputContainer';
import ResultsContainer from '../components/resultsContainer/ResultsContainer';
import PageNotFound from '../components/common/notFound/NotFound';

export default (
  <Switch>
    <Route exact path='/' component={InputContainer}/>
    <Route path='/results' component={ResultsContainer}/>
    <Route component={PageNotFound}/>
  </Switch>
)
