import React from 'react';
import './resultsContainer.css'
import axios from 'axios';
import TripDisplay from './tripDisplay/tripDisplay';
import NexTripBanner from './nexTripBanner/nexTripBanner';
import Schedule from './schedule/schedule';
import BackButton from './backButton/backButton';

export default class ResultsContainer extends React.Component {
  state = {
  }

  render() {
    return(
      <>
        <TripDisplay />
        <NexTripBanner />
        <div className="scheduleContainer">
            <Schedule />
            <BackButton />
        </div>
      </>
    )
  }
}